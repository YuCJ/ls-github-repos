import { createSlice } from '@reduxjs/toolkit';
import * as githubApi from '../../api/github';

const initialState = {
  query: '',
  isLoading: false,
  error: null,
  reposById: {},
  repoIdsByPage: {}, // page start from 1
  pageCount: 0,
  repoCount: 0,
  page: 0,
};

export const searchReposSlice = createSlice({
  name: 'searchRepos',
  initialState,
  // The `immer` used by `createSlice` will prevent mutating the state in reducers
  reducers: {
    resetSearchRepos: () => initialState,
    searchReposRequest(state, { payload }) {
      const { query, page } = payload;
      // Clear the stored repos when query changed
      if (query !== state.query) {
        state.query = query;
        state.repoIdsByPage = initialState.repoIdsByPage;
        state.reposById = initialState.reposById;
      }
      state.page = page;
      state.isLoading = true;
    },
    searchReposSuccess(state, { payload }) {
      // Only takes the latest query response
      if (payload.query !== state.query) {
        return state;
      }
      const { repos, page, pageCount, repoCount } = payload;
      const count = repos.length;
      for (let i = 0; i < count; i += 1) {
        const repo = repos[i];
        const { id } = repo;
        // Add repo entity to `state.reposById`
        state.reposById[id] = repo;
        // Add repo.id to id list
        if (Array.isArray(state.repoIdsByPage[page])) {
          state.repoIdsByPage[page].push(id);
        } else {
          state.repoIdsByPage[page] = [id];
        }
      }
      state.pageCount = pageCount;
      state.repoCount = repoCount;
      state.error = null;
      state.isLoading = false;
    },
    searchReposFailure(state, { payload: error }) {
      state.error = error;
      state.isLoading = false;
    },
  },
});

export const {
  resetSearchRepos,
  searchReposRequest,
  searchReposSuccess,
  searchReposFailure,
} = searchReposSlice.actions;

export function searchRepos(query, perPage = 10, page = 1) {
  return async function(dispatch) {
    try {
      dispatch(searchReposRequest({ query, perPage, page }));
      const { repos, repoCount, pageCount } = await githubApi.searchRepos({
        q: query,
        perPage,
        page,
      });
      dispatch(
        searchReposSuccess({ repos, page, pageCount, repoCount, query })
      );
    } catch (error) {
      dispatch(
        searchReposFailure({
          message: error.message,
        })
      );
    }
  };
}

export default searchReposSlice.reducer;
