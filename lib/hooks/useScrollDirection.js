'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll direction and scroll threshold state for header visibility.
 * @param {object} options
 * @param {boolean} options.isLocked If true, header remains visible (e.g. mobile nav open)
 * @param {number} options.threshold Threshold in px before toggling visibility to prevent jitter
 * @param {number} options.topThreshold Pixel offset from top where header is always visible
 */
export function useScrollDirection({ isLocked = false, threshold = 10, topThreshold = 60 } = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (isLocked || currentScrollY <= topThreshold) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
      } else {
        const diff = currentScrollY - lastScrollY;
        if (Math.abs(diff) > threshold) {
          setIsVisible(diff <= 0);
          lastScrollY = currentScrollY;
        }
      }

      ticking = false;
    };

    updateScroll();

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLocked, threshold, topThreshold]);

  return { isVisible, isScrolled };
}
