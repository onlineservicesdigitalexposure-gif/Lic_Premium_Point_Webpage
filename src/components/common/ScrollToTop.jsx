import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * Floating accessible button positioned cleanly above the right-side Call & WhatsApp buttons.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={handleScrollTop}
          aria-label="Scroll back to top"
          title="Back to top"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          className="fixed right-4 bottom-[8.75rem] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-lic-yellow shadow-lg transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lic-yellow sm:right-6 sm:bottom-[9.75rem] sm:h-13 sm:w-13 cursor-pointer"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
