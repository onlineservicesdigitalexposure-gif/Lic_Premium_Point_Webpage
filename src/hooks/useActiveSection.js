import { useEffect, useState } from 'react';

/**
 * Tracks which observed section ID is active for single-page navigation highlighting.
 * Uses IntersectionObserver plus rAF-throttled scroll boundary checks.
 * @param {string[]} sectionIds
 * @returns {string}
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    let observer = null;
    let rafId = null;

    const observeElements = () => {
      observer?.disconnect();
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: '-25% 0px -55% 0px',
          threshold: [0.05, 0.25, 0.5],
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-attach when lazy sections replace Suspense skeletons
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mutationObserver.observe(mainEl, { childList: true });
    }

    const handleScrollBounds = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (window.scrollY < 80) {
          setActiveId(sectionIds[0]);
          return;
        }
        const reachedBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
        if (reachedBottom) {
          setActiveId(sectionIds[sectionIds.length - 1]);
        }
      });
    };

    window.addEventListener('scroll', handleScrollBounds, { passive: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScrollBounds);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [sectionIds]);

  return activeId;
}
