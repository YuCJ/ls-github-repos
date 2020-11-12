import React from 'react';
import Input from './Input';
import List from './List';
import LoadMore from './LoadMore';
import NoRepoMessage from './NoRepoMessage';
import Error from './Error';
import Loading from './Loading';
// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '50px',
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <GitHubIcon fontSize="large" />
      <Typography component="h1" variant="h4">
        Search GitHub Repos
      </Typography>
      <Input placeholder="請輸入搜尋字串" />
      <List />
      <NoRepoMessage />
      <Loading />
      <Error />
      <LoadMore />
    </Container>
  );
}

Search.propTypes = {};

export default Search;
