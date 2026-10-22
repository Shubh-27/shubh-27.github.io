'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently active in the viewport.
 * @param {string[]} sectionIds Array of element IDs to observe
 * @param {number} offset Top offset threshold in pixels
 */
export function useScrollSpy(sectionIds, offset = 150) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const isBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80;

      if (isBottom) {
        if (sectionIds.length > 0) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
        }
        ticking = false;
        return;
      }

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
      ticking = false;
    };

    updateActiveSection();

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return [activeSection, setActiveSection];
}
