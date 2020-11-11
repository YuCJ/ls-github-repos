import { useEffect, useRef } from 'react';

const useDebouncedEffect = (effect, delay, deps = []) => {
  const lastRef = useRef(null);
  useEffect(
    () => {
      const now = Date.now();
      const last = lastRef.current;
      const timeout = last && now - last < delay ? delay - (now - last) : delay;
      const timer = setTimeout(() => {
        lastRef.current = now;
        effect();
      }, timeout);
      return () => {
        clearTimeout(timer);
      };
    },
    [...deps, delay] // eslint-disable-line react-hooks/exhaustive-deps
  );
};

export default useDebouncedEffect;
