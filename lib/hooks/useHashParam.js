'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to synchronize component state with a URL hash parameter (e.g. #/project/:id).
 * @param {string} prefix The prefix before the parameter value (e.g. '#/project/')
 */
export function useHashParam(prefix) {
  const [param, setParamState] = useState(null);

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith(prefix)) {
        setParamState(hash.slice(prefix.length));
      } else {
        setParamState(null);
      }
    };

    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, [prefix]);

  const setParam = useCallback(
    (newParam) => {
      if (newParam) {
        window.location.hash = `${prefix}${newParam}`;
      } else {
        if (window.location.hash.startsWith(prefix)) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        setParamState(null);
      }
    },
    [prefix]
  );

  return [param, setParam];
}
