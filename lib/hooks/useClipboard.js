'use client';

import { useState, useCallback } from 'react';

/**
 * Hook to manage copying text to the clipboard with temporary feedback state.
 * @param {number} timeout Duration in ms to keep the copied status active.
 */
export function useClipboard(timeout = 2000) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copy = useCallback(
    (key, text) => (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (!navigator?.clipboard?.writeText) return;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedKey(key);
          setTimeout(() => setCopiedKey(null), timeout);
        })
        .catch(() => {});
    },
    [timeout]
  );

  const isCopied = useCallback((key) => copiedKey === key, [copiedKey]);

  return { copiedKey, copy, isCopied };
}
