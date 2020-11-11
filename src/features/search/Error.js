import { perPage } from './constants';
import { searchRepos } from './searchReposSlice';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

export default function Error() {
  const errorMessage = useSelector(state => state.searchRepos.error?.message);
  const query = useSelector(state => state.searchRepos.query);
  const page = useSelector(state => state.searchRepos.page);
  const dispatch = useDispatch();
  if (!errorMessage) return null;
  return (
    <div>
      {errorMessage}
      <button
        onClick={() => {
          dispatch(searchRepos(query, perPage, page));
        }}
      >
        retry
      </button>
    </div>
  );
}
