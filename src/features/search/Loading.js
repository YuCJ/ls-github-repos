import { useSelector } from 'react-redux';
import React from 'react';
// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  const isLoading = useSelector(state => state.searchRepos.isLoading);
  return isLoading ? <CircularProgress /> : null;
}
