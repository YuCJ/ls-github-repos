import React from 'react';
import Input from './Input';
import List from './List';
import LoadMore from './LoadMore';
import NoRepoMessage from './NoRepoMessage';
import Error from './Error';

function Search(props) {
  return (
    <>
      <Input placeholder="請輸入搜尋字串" />
      <List />
      <NoRepoMessage />
      <Error />
      <LoadMore />
    </>
  );
}

Search.propTypes = {};

export default Search;
