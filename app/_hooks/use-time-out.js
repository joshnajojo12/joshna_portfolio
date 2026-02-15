'use client';

import { useEffect } from 'react';

/**
 * @param {Object} params
 * @param {() => void} params.callback
 * @param {number} params.duration
 * @param {import('react').DependencyList} params.deps
 * @param {boolean} [params.enabled]
 */
export function useTimeOut({
  callback,
  duration = 100,
  deps = [],
  enabled = true,
}) {
  const effectDeps = [...deps, enabled];

  useEffect(() => {
    if (!enabled) return undefined;

    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, effectDeps);
}
