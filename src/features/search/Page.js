import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Repo from './Repo';

function Page({ page }) {
  const repoIds = useSelector(state => state.searchRepos.repoIdsByPage?.[page]);
  return repoIds.map((repoId, i) => <Repo key={i} repoId={repoId} />);
}

Page.propTypes = {
  page: PropTypes.string.isRequired,
};

export default React.memo(Page);
