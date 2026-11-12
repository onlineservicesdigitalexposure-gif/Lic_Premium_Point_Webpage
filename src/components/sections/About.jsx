import { m, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import officeBoardImage from '../../assets/images/image1.jpeg';
import Badge from '../common/Badge';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';
import { formatMailtoHref, formatTelHref } from '../../utils/contact';

const ABOUT_PILLARS = [
  'Clear, one-on-one discussions tailored to your policy questions and needs.',
  'Easy in-person access near UCO Bank, Belgharia 4 No Platform.',
  'Direct communication by phone, WhatsApp, or email—without call-center queues.',
];

/**
 * Framed office board visual for LIC PREMIUM POINT with clean architectural navy & gold accents.
 */
function AdvisorProfileFrame() {
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Subtle architectural offset frame */}
      <div
        className="absolute -top-3 -left-3 h-full w-full rounded-xl border border-lic-yellow/65 bg-surface-light"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-white p-5 shadow-md sm:p-6">
        <div className="mb-3.5 flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold tracking-wider text-navy-800 uppercase">
            Local Assistance Desk
          </span>
          <div className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface-light px-2.5 py-1 text-[11px] font-bold text-navy-800">
            <span className="h-2 w-2 rounded-full bg-lic-yellow" aria-hidden="true" />
            <span>{address.locality} Desk</span>
          </div>
        </div>

        <div className="rounded-lg border border-navy-100 bg-white p-2.5 shadow-xs sm:p-3.5">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded bg-white">
            <img
              src={officeBoardImage}
              alt={`${businessName} office signboard for ${ownerName} in ${address.locality}, ${address.city}`}
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
              className="h-full w-full scale-[1.07] object-cover object-center select-none"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-4">
          <div>
            <p className="font-display text-lg font-bold text-navy-900">{ownerName}</p>
            <p className="text-xs font-semibold text-navy-800">{businessName}</p>
          </div>
          <Badge tone="navy">
            {address.locality}, {address.city}
          </Badge>
        </div>

        <p className="mt-3 rounded-lg bg-surface-light px-3 py-2 text-xs text-ink-secondary">
          <span className="font-semibold text-navy-900">Landmark:</span> {address.landmark} •{' '}
          <span className="font-semibold text-navy-900">{contact.primaryPhone}</span>
        </p>
      </div>
    </div>
  );
}

/**
 * Two-column About section introducing Pallab Goswami and LIC PREMIUM POINT Belgharia.
 */
export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;

  return (
    <Section id={SECTION_IDS.ABOUT} labelledBy="about-heading" surface="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <m.div
            className="lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <AdvisorProfileFrame />
          </m.div>

          <m.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <SectionHeading
              headingId="about-heading"
              align="left"
              eyebrow="Your Local Insurance Assistance Partner"
              title="Meet Pallab Goswami"
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-secondary">
              <p>
                <strong className="font-semibold text-ink">{businessName}</strong> is an
                independently operated local service desk in Belgharia, Kolkata, managed by{' '}
                <strong className="font-semibold text-ink">{ownerName}</strong>. For families and
                individuals seeking an approachable LIC insurance agent in Belgharia or reliable
                life insurance assistance, our focus is giving you clear guidance without
                confusion.
              </p>
              <p>
                Conveniently located at{' '}
                <strong className="font-semibold text-ink">{address.fullAddress}</strong>—near{' '}
                <strong className="font-semibold text-ink">
                  {address.landmark} (Belgharia railway station)
                </strong>
                —you can visit in person for straightforward help with policy guidance, general
                policy queries, or documentation requirements.
              </p>
            </div>

            <ul className="mt-6 space-y-3 border-t border-border-subtle pt-5">
              {ABOUT_PILLARS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-navy-800"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <PrimaryButton href={formatTelHref(contact.primaryPhone)} variant="primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {contact.primaryPhoneDisplay}</span>
              </PrimaryButton>

              <PrimaryButton href={`#${SECTION_IDS.CONTACT}`} variant="outline">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Visit Belgharia Office</span>
              </PrimaryButton>

              <a
                href={formatMailtoHref(contact.email)}
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-navy-800 underline decoration-navy-800/30 underline-offset-4 transition-colors hover:text-navy-900"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  );
}
