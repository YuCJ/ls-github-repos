import { useSelector } from 'react-redux';
import React from 'react';

export default function Loading() {
  const isLoading = useSelector(state => state.searchRepo.isLoading);
  return isLoading ? <div>isLoading</div> : null;
}
