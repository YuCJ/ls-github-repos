import { useSelector } from 'react-redux';
import Page from './Page';
import React from 'react';

function List() {
  const repoIdsByPage = useSelector(state => state.searchRepos.repoIdsByPage);
  const pages = Object.keys(repoIdsByPage).sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10)
  );
  return pages.map(page => <Page key={page} page={page} />);
}

export default List;
