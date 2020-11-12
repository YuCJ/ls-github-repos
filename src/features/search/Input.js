import { perPage, debounceDelay } from './constants';
import { searchRepos, resetSearchRepos } from './searchReposSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import useDebouncedEffect from '../../hooks/useDebouncedEffect';
// @material-ui
import TextField from '@material-ui/core/TextField';

function Input() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useDebouncedEffect(
    () => {
      if (!value) {
        dispatch(resetSearchRepos());
      } else {
        dispatch(searchRepos(value, perPage, 1));
      }
    },
    debounceDelay,
    [value]
  );
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      value={value}
      onChange={e => setValue(e.target.value)}
      label="請輸入 search query"
      autoFocus
    />
  );
}

export default Input;
