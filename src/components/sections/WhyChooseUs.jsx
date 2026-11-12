import { m, useReducedMotion } from 'framer-motion';
import {
  ClipboardCheck,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  UserCheck,
} from 'lucide-react';
import Badge from '../common/Badge';
import Card from '../common/Card';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';
import { WHY_CHOOSE_US_POINTS } from '../../data/services';
import { formatTelHref, formatWhatsAppHref } from '../../utils/contact';

const POINT_ICONS = {
  UserCheck,
  MapPin,
  HeartHandshake,
  MessageCircle,
  ClipboardCheck,
};

/**
 * Two-column Why Choose Us section pairing a dark office summary card with a unified editorial pillar list.
 */
export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;

  return (
    <Section id={SECTION_IDS.WHY_CHOOSE_US} labelledBy="why-heading" surface="white">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column */}
          <m.div
            className="lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <SectionHeading
              headingId="why-heading"
              align="left"
              eyebrow="Why Choose Us"
              title="Why Visit LIC Premium Point?"
              subtitle="Personal, straightforward assistance from a neighbourhood desk you can visit or call directly."
            />

            <div className="relative mt-8">
              <div
                className="absolute -right-2.5 -bottom-2.5 h-full w-full rounded-xl border border-lic-yellow/55 bg-surface-light"
                aria-hidden="true"
              />

              <Card tone="navy" padding="lg" className="relative">
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="darkSurface">Belgharia Service Point</Badge>
                  <span className="h-2 w-2 rounded-full bg-lic-yellow" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {businessName}
                </h3>
                <p className="mt-1 text-sm font-medium text-lic-yellow">{ownerName}</p>

                <div className="mt-4 space-y-2.5 border-t border-white/15 pt-4 text-sm text-navy-100">
                  <p className="flex items-start gap-2.5">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow"
                      aria-hidden="true"
                    />
                    <span>
                      {address.fullAddress}
                      <span className="mt-0.5 block text-xs text-navy-100/80">
                        Landmark: {address.landmark}
                      </span>
                    </span>
                  </p>

                  <p className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                    <span>
                      <a
                        href={formatTelHref(contact.primaryPhone)}
                        className="font-semibold text-white hover:text-lic-yellow"
                      >
                        {contact.primaryPhoneDisplay}
                      </a>{' '}
                      <span className="text-navy-100/70">/</span>{' '}
                      <a
                        href={formatTelHref(contact.secondaryPhone)}
                        className="font-semibold text-white hover:text-lic-yellow"
                      >
                        {contact.secondaryPhoneDisplay}
                      </a>
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton
                    href={formatWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>WhatsApp Now</span>
                  </PrimaryButton>

                  <PrimaryButton
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlineDark"
                    size="sm"
                  >
                    <span>Directions</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </PrimaryButton>
                </div>
              </Card>
            </div>
          </m.div>

          {/* Right Column: Unified Bordered Editorial Pillar List */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-sm">
              <ul className="divide-y divide-border-subtle">
                {WHY_CHOOSE_US_POINTS.map((point, index) => {
                  const Icon = POINT_ICONS[point.iconName] || UserCheck;

                  return (
                    <m.li
                      key={point.id}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.38, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }
                      }
                      className="group flex items-start gap-4 p-5 transition-colors duration-150 hover:bg-surface-light/70 sm:p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors duration-200 group-hover:bg-navy-800 group-hover:text-lic-yellow">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-base font-bold text-ink">
                            {point.title}
                          </h3>
                          <span
                            className="hidden text-xs font-bold text-ink-muted tabular-nums sm:inline"
                            aria-hidden="true"
                          >
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                          {point.description}
                        </p>
                      </div>
                    </m.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
