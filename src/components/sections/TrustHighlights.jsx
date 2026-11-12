import { m, useReducedMotion } from 'framer-motion';
import { MapPin, MessageSquare, PhoneCall, UserCheck } from 'lucide-react';
import Container from '../common/Container';
import Section from '../common/Section';
import { SECTION_IDS } from '../../data/navigation';
import { TRUST_HIGHLIGHTS } from '../../data/services';

const ICON_MAP = {
  UserCheck,
  MapPin,
  PhoneCall,
  MessageSquare,
};

/**
 * Unified four-column trust strip anchored cleanly beneath the Hero section.
 */
export default function TrustHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id={SECTION_IDS.TRUST}
      labelledBy="trust-heading"
      surface="light"
      spacing="compact"
      className="border-b border-border-subtle"
    >
      <Container>
        <h2 id="trust-heading" className="sr-only">
          Why Policyholders Trust LIC Premium Point
        </h2>

        <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-xs">
          <ul className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {TRUST_HIGHLIGHTS.map((item, index) => {
              const Icon = ICON_MAP[item.iconName] || UserCheck;
              const smBorder =
                index === 1 ? 'sm:border-l sm:border-border-subtle' : '';
              const smTopBorder =
                index >= 2 ? 'sm:border-t sm:border-border-subtle lg:border-t-0' : '';

              return (
                <m.li
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }
                  }
                  className={`flex items-start gap-3.5 p-5 transition-colors hover:bg-surface-light/60 sm:p-6 ${smBorder} ${smTopBorder}`.trim()}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-ink sm:text-[0.9375rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </m.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
