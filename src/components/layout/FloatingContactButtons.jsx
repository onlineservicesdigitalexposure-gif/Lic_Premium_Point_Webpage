import { useEffect, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { formatTelHref, formatWhatsAppHref } from '../../utils/contact';

const FORM_FIELD_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

/**
 * Original WhatsApp brand icon SVG.
 */
function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16.002 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.353.615 4.651 1.783 6.676L2.56 29.58l7.068-1.853A13.28 13.28 0 0 0 16.002 29.333c7.361 0 13.331-5.972 13.331-13.333 0-7.361-5.97-13.333-13.331-13.333Zm0 24.442c-2.067 0-4.093-.554-5.86-1.601l-.42-.25-4.194 1.1 1.12-4.088-.274-.435a11.06 11.06 0 0 1-1.696-5.835c0-6.115 4.974-11.09 11.09-11.09 6.115 0 11.088 4.975 11.088 11.09 0 6.115-4.973 11.109-11.088 11.109Zm6.085-8.308c-.333-.167-1.973-.973-2.279-1.084-.305-.112-.527-.167-.75.167-.222.333-.861 1.084-1.055 1.306-.195.222-.389.25-.722.083-.333-.167-1.407-.519-2.68-1.654-.99-.883-1.659-1.974-1.854-2.307-.194-.333-.02-.514.146-.68.15-.149.333-.389.5-.583.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.473-.27-.65-.545-.562-.75-.572-.194-.01-.417-.012-.639-.012-.222 0-.583.083-.889.417-.305.333-1.167 1.139-1.167 2.778 0 1.639 1.195 3.223 1.361 3.445.167.222 2.351 3.591 5.696 5.035.795.343 1.416.548 1.9.701.799.254 1.526.218 2.101.132.641-.096 1.973-.806 2.25-1.584.278-.778.278-1.445.195-1.584-.083-.139-.306-.222-.639-.389Z" />
    </svg>
  );
}

/**
 * Classic telephone handset logo SVG for the floating call button.
 */
function CallLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5.5 w-5.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
    </svg>
  );
}

/**
 * Global right-side floating Call & WhatsApp action buttons visible across desktop and mobile.
 */
export default function FloatingContactButtons() {
  const [isTypingMobile, setIsTypingMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { contact } = BUSINESS_INFO;

  useEffect(() => {
    const handleFocusIn = (event) => {
      if (
        window.innerWidth < 768 &&
        event.target &&
        FORM_FIELD_TAGS.has(event.target.tagName)
      ) {
        setIsTypingMobile(true);
      }
    };

    const handleFocusOut = () => {
      const active = document.activeElement;
      if (!active || !FORM_FIELD_TAGS.has(active.tagName)) {
        setIsTypingMobile(false);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  if (isTypingMobile) return null;

  const hoverMotion = prefersReducedMotion ? undefined : { scale: 1.06, y: -2 };
  const tapMotion = prefersReducedMotion ? undefined : { scale: 0.95 };

  return (
    <div
      role="region"
      aria-label="Global quick contact buttons"
      className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
    >
      {/* Call Now Floating Button */}
      <m.a
        href={formatTelHref(contact.primaryPhone)}
        aria-label={`Call Now on ${contact.primaryPhoneDisplay}`}
        title={`Call ${contact.primaryPhoneDisplay}`}
        whileHover={hoverMotion}
        whileTap={tapMotion}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-lic-yellow bg-navy-800 text-white shadow-lg transition-colors hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 sm:h-13 sm:w-13"
      >
        <CallLogo />
        <span className="pointer-events-none absolute right-15 hidden rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Call {contact.primaryPhone}
        </span>
      </m.a>

      {/* WhatsApp Floating Button */}
      <m.a
        href={formatWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        whileHover={hoverMotion}
        whileTap={tapMotion}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1EBE5D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EBE5D] sm:h-13 sm:w-13"
      >
        <WhatsAppLogo />
        <span className="pointer-events-none absolute right-15 hidden rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </m.a>
    </div>
  );
}
