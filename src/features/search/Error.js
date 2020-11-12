import { perPage } from './constants';
import { searchRepos } from './searchReposSlice';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
// @material-ui
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export default function Error() {
  const error = useSelector(state => state.searchRepos.error);
  const query = useSelector(state => state.searchRepos.query);
  const page = useSelector(state => state.searchRepos.page);
  const dispatch = useDispatch();
  return (
    <Snackbar open={Boolean(error)} autoHideDuration={6000}>
      <MuiAlert
        severity="error"
        variant="filled"
        action={
          <React.Fragment>
            <Button
              size="small"
              onClick={() => {
                dispatch(searchRepos(query, perPage, page));
              }}
            >
              RETRY
            </Button>
            <IconButton size="small" aria-label="close" color="inherit">
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        {error?.message || 'Unknown error'}
      </MuiAlert>
    </Snackbar>
  );
}
