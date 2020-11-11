import { perPage } from './constants';
import { searchRepos, resetSearchRepos } from './searchReposSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import useDebouncedEffect from '../../hooks/useDebouncedEffect';

const StyledInput = styled.input`
  height: 2rem;
  font-size: 2rem;
`;

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
    3000,
    [value]
  );
  return (
    <StyledInput
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="請輸入"
    />
  );
}

export default Input;
