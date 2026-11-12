import { useCallback, useRef, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import MobileMenu from './MobileMenu';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { NAV_LINKS, SECTION_IDS } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { formatTelHref } from '../../utils/contact';

const OBSERVED_SECTIONS = NAV_LINKS.map((link) => link.id);

/**
 * LIC-inspired protective shield & flame emblem (original vector mark).
 */
function BrandLogoMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#10264B" />
      <path
        d="M20 6.5L30.5 10.5V19.2C30.5 25.8 26 30.8 20 33.5C14 30.8 9.5 25.8 9.5 19.2V10.5L20 6.5Z"
        fill="#12377A"
        stroke="#FFC928"
        strokeWidth="1.75"
      />
      <path
        d="M20 12.2C22.2 15.1 23.4 17.3 23.4 19.6C23.4 21.7 21.9 23.4 20 23.4C18.1 23.4 16.6 21.7 16.6 19.6C16.6 17.3 17.8 15.1 20 12.2Z"
        fill="#FFC928"
      />
      <path
        d="M14.2 23.8C15.9 25.6 17.9 26.5 20 26.5C22.1 26.5 24.1 25.6 25.8 23.8"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="31.5" cy="8.5" r="2.5" fill="#ED1C24" />
    </svg>
  );
}

/**
 * Sticky single-page header navigation with isolated scroll-spy state to prevent full-page re-renders.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef(null);
  const activeSection = useActiveSection(OBSERVED_SECTIONS);
  const handleClose = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border-subtle bg-white"
      style={{ boxShadow: 'var(--shadow-nav)' }}
    >
      <Container className="relative z-50 flex h-[4.25rem] items-center justify-between gap-3 bg-white sm:h-[4.5rem] sm:gap-4">
        <a
          href={`#${SECTION_IDS.HERO}`}
          className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-offset-4 sm:gap-3"
        >
          <BrandLogoMark />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-display text-[15px] font-extrabold tracking-tight text-navy-900 transition-colors group-hover:text-navy-800 sm:text-lg">
              {BUSINESS_INFO.businessName}
            </span>
            <span className="truncate text-[11px] font-semibold tracking-wide text-ink-secondary">
              {BUSINESS_INFO.ownerName} • {BUSINESS_INFO.address.locality}
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'font-semibold text-navy-800'
                    : 'text-ink-secondary hover:text-navy-800'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-lic-yellow transition-transform duration-200 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton
            href={formatTelHref(BUSINESS_INFO.contact.primaryPhone)}
            variant="primary"
            size="md"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call Now</span>
          </PrimaryButton>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-[10px] border border-border-subtle bg-surface-light p-2.5 text-navy-900 transition-colors hover:bg-navy-100 lg:hidden cursor-pointer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>

      <MobileMenu
        isOpen={mobileOpen}
        activeSection={activeSection}
        triggerRef={triggerRef}
        onClose={handleClose}
      />
    </header>
  );
}
