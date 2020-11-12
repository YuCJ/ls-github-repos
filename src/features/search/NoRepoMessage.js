import { useSelector } from 'react-redux';
import React from 'react';

export default function Message() {
  const query = useSelector(state => state.searchRepos.query);
  const isLoading = useSelector(state => state.searchRepos.isLoading);
  const repoCount = useSelector(state => state.searchRepos.repoCount);
  const error = useSelector(state => state.searchRepos.error);
  if (isLoading || repoCount || !query || error) {
    return null;
  }
  return <div>No matched case with query: {query}</div>;
}
