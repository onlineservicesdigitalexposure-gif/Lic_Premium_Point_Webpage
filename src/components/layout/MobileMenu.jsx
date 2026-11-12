import { useEffect, useRef } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { NAV_LINKS } from '../../data/navigation';
import { formatTelHref, formatWhatsAppHref } from '../../utils/contact';

/**
 * Responsive mobile navigation drawer with Escape support, backdrop dismissal, focus management, and quick CTAs.
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {string} props.activeSection
 * @param {React.RefObject<HTMLButtonElement | null>} [props.triggerRef]
 * @param {() => void} props.onClose
 */
export default function MobileMenu({ isOpen, activeSection, triggerRef, onClose }) {
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') onClose();
      };

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef?.current?.focus();
    }

    return undefined;
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            key="mobile-backdrop"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-navy-950/45 lg:hidden"
          />

          <m.div
            key="mobile-panel"
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative z-50 border-t border-border-subtle bg-white px-4 pt-4 pb-6 shadow-xl lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border-subtle pb-3">
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  {BUSINESS_INFO.businessName}
                </p>
                <p className="text-xs text-ink-secondary">{BUSINESS_INFO.ownerName}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-lg border border-border-subtle p-2 text-ink-secondary transition-colors hover:bg-surface-light hover:text-navy-900 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile section links" className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-[10px] px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-50 font-semibold text-navy-800'
                        : 'text-ink-secondary hover:bg-surface-light hover:text-navy-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full bg-lic-yellow"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2.5 border-t border-border-subtle pt-4 sm:grid-cols-2">
              <PrimaryButton
                href={formatTelHref(BUSINESS_INFO.contact.primaryPhone)}
                onClick={onClose}
                variant="primary"
                className="w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Now</span>
              </PrimaryButton>
              <PrimaryButton
                href={formatWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                variant="secondary"
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </PrimaryButton>
            </div>

            <p className="mt-3 text-center text-xs text-ink-secondary">
              Alt Phone:{' '}
              <a
                href={formatTelHref(BUSINESS_INFO.contact.secondaryPhone)}
                className="font-semibold text-navy-800 underline underline-offset-2"
              >
                {BUSINESS_INFO.contact.secondaryPhoneDisplay}
              </a>
            </p>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
