import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

export default function Repo({ repoId }) {
  const repo = useSelector(state => state.searchRepos.reposById[repoId]);
  return (
    <div>
      {repo.id}
      {repo.full_name}
    </div>
  );
}

Repo.propTypes = {
  repoId: PropTypes.string.isRequired,
};
