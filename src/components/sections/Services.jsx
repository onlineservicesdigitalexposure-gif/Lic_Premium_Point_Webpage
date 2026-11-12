import { m, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  Landmark,
  Printer,
  ShieldCheck,
  Umbrella,
} from 'lucide-react';
import Card from '../common/Card';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { SECTION_IDS } from '../../data/navigation';
import { SERVICE_CATEGORIES } from '../../data/services';

const SERVICE_ICONS = {
  ShieldCheck,
  Landmark,
  Umbrella,
  ClipboardList,
  FileCheck2,
  Printer,
};

/**
 * Six-card Services section with restrained architectural accents and prominent CTAs.
 */
export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id={SECTION_IDS.SERVICES} labelledBy="services-heading" surface="light">
      <Container>
        <SectionHeading
          headingId="services-heading"
          eyebrow="Our Services"
          title="Insurance Guidance & Customer Services"
          subtitle="Explore assistance for your insurance requirements through LIC Premium Point."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.iconName] || ShieldCheck;

            return (
              <m.li
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }
                }
                className="flex"
              >
                <Card
                  interactive
                  padding="lg"
                  className="group relative flex w-full flex-col border-t-2 border-t-navy-800 hover:border-t-lic-yellow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors duration-200 group-hover:bg-navy-800 group-hover:text-lic-yellow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      className="font-display text-xs font-bold tracking-widest text-ink-muted tabular-nums"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-secondary">
                    {service.summary}
                  </p>

                  <div className="mt-6 border-t border-border-subtle pt-4">
                    {service.hasContactCta ? (
                      <PrimaryButton
                        href={`#${SECTION_IDS.CONTACT}`}
                        variant="secondary"
                        size="sm"
                        className="w-full justify-between"
                      >
                        <span>Contact Us</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        href={`#${SECTION_IDS.XEROX}`}
                        variant="outline"
                        size="sm"
                        className="w-full justify-between"
                      >
                        <span>View Xerox Service</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </PrimaryButton>
                    )}
                  </div>
                </Card>
              </m.li>
            );
          })}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-ink-secondary">
          Information shared is for general customer guidance only. Policy terms, eligibility,
          coverage, and benefits are governed exclusively by official LIC policy documents.
        </p>
      </Container>
    </Section>
  );
}
