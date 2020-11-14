import { useEffect, useRef } from 'react';

const useDebouncedEffect = (effect, delay, deps = []) => {
  const timerRef = useRef(null);
  useEffect(
    () => {
      const timer = timerRef.current;
      if (timer) {
        clearTimeout(timer);
      }
      timerRef.current = setTimeout(() => {
        effect();
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    },
    [...deps, delay] // eslint-disable-line react-hooks/exhaustive-deps
  );
};

export default useDebouncedEffect;
