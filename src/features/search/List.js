import { useSelector } from 'react-redux';
import Page from './Page';
import React from 'react';

function List() {
  const repoIdsByPage = useSelector(state => state.searchRepos.repoIdsByPage);
  const pages = Object.keys(repoIdsByPage).sort((a, b) => a - b);
  return pages.map((page, i) => <Page key={i} page={page} />);
}

export default List;
