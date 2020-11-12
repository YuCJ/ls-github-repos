/* global IntersectionObserver */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function InfiniteScrollObserver({ onIntersect, isWatching }) {
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });
    function handleIntersection(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          onIntersect();
          // only trigger once
          observer.unobserve(targetRef.current);
        }
      }
    }
    if (targetRef.current && isWatching) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [onIntersect, isWatching]);
  return <div ref={targetRef} style={{ height: 1 }} />;
}

InfiniteScrollObserver.propTypes = {
  onIntersect: PropTypes.func.isRequired,
  isWatching: PropTypes.bool.isRequired,
};
