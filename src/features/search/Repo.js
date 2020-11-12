import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginBottom: 14,
  },
  title: {
    textOverflow: 'eclipse',
  },
  actions: {
    justifyContent: 'end',
  },
});

export default function Repo({ repoId }) {
  const repo = useSelector(state => state.searchRepos.reposById[repoId]);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {repo.full_name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {repo.language}
        </Typography>
        <Typography variant="body1" component="p">
          {repo.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={repo.html_url}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}

Repo.propTypes = {
  repoId: PropTypes.number.isRequired,
};
