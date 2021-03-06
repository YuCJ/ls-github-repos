import { perPage } from './constants';
import { searchRepos } from './searchReposSlice';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import InfiniteScrollObserver from './InfiniteScrollObserver';
// @material-ui
import Typography from '@material-ui/core/Typography';

export default function LoadMore() {
  const page = useSelector(state => state.searchRepos.page);
  const pageCount = useSelector(state => state.searchRepos.pageCount);
  const isLoading = useSelector(state => state.searchRepos.isLoading);
  const isEnd = page >= pageCount;
  const query = useSelector(state => state.searchRepos.query);
  const dispatch = useDispatch();
  const error = useSelector(state => state.searchRepos.error);
  const searchNext = () => {
    dispatch(searchRepos(query, perPage, page + 1));
  };
  return (
    <>
      <InfiniteScrollObserver
        onIntersect={searchNext}
        isWatching={!error && !isLoading && !isEnd}
      />
      {pageCount > 0 && isEnd ? (
        <Typography align="center" variant="body1">
          已經到底了
        </Typography>
      ) : null}
    </>
  );
}
