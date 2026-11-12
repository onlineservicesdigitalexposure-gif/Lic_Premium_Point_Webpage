import { useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '../common/Container';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { FAQ_ITEMS } from '../../data/faq';
import { SECTION_IDS } from '../../data/navigation';

/**
 * Accessible single-open Frequently Asked Questions accordion with crisp active indicator.
 */
export default function FAQ() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
  const buttonRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const handleKeyDown = (event, index) => {
    const lastIndex = FAQ_ITEMS.length - 1;
    let nextIndex = null;

    if (event.key === 'ArrowDown') nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === 'ArrowUp') nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = lastIndex;

    if (nextIndex !== null) {
      event.preventDefault();
      buttonRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <Section id={SECTION_IDS.FAQ} labelledBy="faq-heading" surface="light">
      <Container>
        <SectionHeading
          headingId="faq-heading"
          eyebrow="Common Queries"
          title="Frequently Asked Questions"
          subtitle="Clear answers based on verified details about LIC Premium Point, Belgharia."
        />

        <m.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
          className="mx-auto mt-10 max-w-3xl space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border bg-white transition-all duration-200 ${
                  isOpen
                    ? 'border-navy-800/35 border-l-4 border-l-lic-yellow shadow-sm'
                    : 'border-border-subtle shadow-xs hover:border-navy-800/25'
                }`}
              >
                <h3>
                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-light/60 sm:px-6 sm:py-4.5 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle
                        className={`h-5 w-5 shrink-0 transition-colors ${
                          isOpen ? 'text-navy-800' : 'text-ink-muted'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-display text-sm font-bold text-ink sm:text-base">
                        {item.question}
                      </span>
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-navy-800 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-subtle/80 px-5 pt-3.5 pb-5 pl-13 text-sm leading-relaxed text-ink-secondary sm:px-6 sm:pl-14 sm:text-[0.9375rem]">
                        {item.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </m.div>
      </Container>
    </Section>
  );
}
