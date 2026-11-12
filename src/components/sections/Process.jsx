import { m, useReducedMotion } from 'framer-motion';
import { FileSearch, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import Card from '../common/Card';
import Container from '../common/Container';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { SECTION_IDS } from '../../data/navigation';
import { PROCESS_STEPS } from '../../data/services';

const STEP_ICONS = {
  PhoneCall,
  MessageSquare,
  FileSearch,
  ShieldCheck,
};

/**
 * Four-step How It Works timeline (horizontal on desktop, vertical on mobile).
 */
export default function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id={SECTION_IDS.PROCESS} labelledBy="process-heading" surface="light">
      <Container>
        <SectionHeading
          headingId="process-heading"
          eyebrow="How It Works"
          title="Getting Started Is Simple"
          subtitle="Four clear steps to connect, discuss your requirements, and follow official LIC procedures."
        />

        <div className="relative mt-12">
          {/* Desktop horizontal timeline connector aligned to center of h-12 node */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-16 left-16 hidden h-0.5 bg-gradient-to-r from-navy-800/20 via-lic-yellow to-navy-800/20 lg:block"
          />

          {/* Mobile/Tablet vertical timeline connector aligned to center of w-12 node */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-navy-800/25 via-lic-yellow to-navy-800/25 lg:hidden"
          />

          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-5">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = STEP_ICONS[item.iconName] || PhoneCall;

              return (
                <m.li
                  key={item.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }
                  }
                  className="relative flex items-start gap-4 lg:flex-col lg:items-stretch lg:gap-5"
                >
                  <div className="relative z-10 flex shrink-0 items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-surface-light bg-navy-900 font-display text-sm font-extrabold text-lic-yellow shadow-sm tabular-nums">
                      {item.number}
                    </div>

                    <div className="hidden h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-white text-navy-800 shadow-xs lg:flex">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <Card interactive padding="md" className="flex-1 lg:flex lg:flex-col">
                    <div className="flex items-center justify-between gap-2 lg:hidden">
                      <span className="text-xs font-bold tracking-wider text-navy-800 uppercase">
                        Step {item.number}
                      </span>
                      <Icon className="h-4 w-4 text-navy-800" aria-hidden="true" />
                    </div>

                    <h3 className="mt-1 font-display text-base font-bold text-ink lg:mt-0">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {item.description}
                    </p>
                  </Card>
                </m.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
