import { useSelector } from 'react-redux';
import React from 'react';

export default function Message() {
  const query = useSelector(state => state.searchRepos.query);
  const isLoading = useSelector(state => state.searchRepos.isLoading);
  const repoCount = useSelector(state => state.searchRepos.repoCount);
  if (isLoading || repoCount || !query) {
    return null;
  }
  return <div>No matched case with query: {query}</div>;
}
