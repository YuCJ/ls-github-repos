import { configureStore } from '@reduxjs/toolkit';
import searchReposReducer from '../features/search/searchReposSlice';

// `configureStore` API will apply redux-thunk, redux-dev-tool, redux logger, and redux hot reload.
// https://redux.js.org/recipes/configuring-your-store#simplifying-setup-with-redux-toolkit
export default configureStore({
  reducer: {
    searchRepos: searchReposReducer,
  },
});
