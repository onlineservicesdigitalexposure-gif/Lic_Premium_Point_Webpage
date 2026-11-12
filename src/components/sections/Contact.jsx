import { Suspense, lazy } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import Card from '../common/Card';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';
import { formatMailtoHref, formatTelHref, formatWhatsAppHref } from '../../utils/contact';

const EnquiryForm = lazy(() => import('../forms/EnquiryForm'));

function EnquiryFormSkeleton() {
  return (
    <Card padding="lg" className="min-h-[470px] animate-pulse" aria-busy="true">
      <div className="h-6 w-44 rounded bg-navy-100" />
      <div className="mt-2 h-4 w-3/4 rounded bg-surface-light" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="h-11 rounded-[10px] bg-surface-light" />
        <div className="h-11 rounded-[10px] bg-surface-light" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-11 rounded-[10px] bg-surface-light" />
        <div className="h-11 rounded-[10px] bg-surface-light" />
      </div>
      <div className="mt-4 h-28 rounded-[10px] bg-surface-light" />
      <div className="mt-6 h-12 rounded-[10px] bg-navy-100" />
    </Card>
  );
}

/**
 * Two-column Contact section with functional contact cards, Belgharia directions, and WhatsApp-powered enquiry form.
 */
export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const { address, contact, ownerName, businessName } = BUSINESS_INFO;

  return (
    <Section id={SECTION_IDS.CONTACT} labelledBy="contact-heading" surface="white">
      <Container>
        <SectionHeading
          headingId="contact-heading"
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Have questions about insurance or need assistance? Get in touch with Pallab Goswami."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Functional Contact Cards & Belgharia Directions */}
          <m.div
            className="space-y-5 lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {/* Card 1: Call Us */}
              <Card interactive padding="md" className="flex flex-col">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">Call Us</h3>
                <p className="mt-1 text-xs text-ink-secondary">Direct phone support</p>
                <div className="mt-3 space-y-1 text-sm">
                  <a
                    href={formatTelHref(contact.primaryPhone)}
                    className="block font-semibold text-navy-800 hover:text-navy-900 hover:underline"
                  >
                    {contact.primaryPhone}
                  </a>
                  <a
                    href={formatTelHref(contact.secondaryPhone)}
                    className="block font-medium text-ink-secondary hover:text-navy-800 hover:underline"
                  >
                    Alt: {contact.secondaryPhone}
                  </a>
                </div>
              </Card>

              {/* Card 2: WhatsApp */}
              <Card interactive padding="md" className="flex flex-col">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">WhatsApp</h3>
                <p className="mt-1 text-xs text-ink-secondary">Quick chat assistance</p>
                <div className="mt-3">
                  <a
                    href={formatWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-navy-900 hover:underline"
                  >
                    <span>Chat on {contact.primaryPhone}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Card>

              {/* Card 3: Email Us */}
              <Card interactive padding="md" className="flex flex-col">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">Email Us</h3>
                <p className="mt-1 text-xs text-ink-secondary">Write with your query</p>
                <div className="mt-3">
                  <a
                    href={formatMailtoHref(contact.email)}
                    className="block break-all text-sm font-semibold text-navy-800 hover:text-navy-900 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </Card>

              {/* Card 4: Visit Our Office */}
              <Card interactive padding="md" className="flex flex-col">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">
                  Visit Our Office
                </h3>
                <p className="mt-1 text-xs text-ink-secondary">
                  {address.building}, {address.street}, {address.locality}, {address.city}{' '}
                  {address.postalCode}
                </p>
                <div className="mt-3">
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-navy-900 hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Verified Office Address & Google Maps Directions Card */}
            <Card tone="navy" padding="lg">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-wider text-lic-yellow uppercase">
                    Office Address &amp; Landmark
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">
                    {businessName} — {ownerName}
                  </h3>
                </div>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lic-yellow"
                  aria-hidden="true"
                >
                  <Navigation className="h-4 w-4" />
                </span>
              </div>

              <address className="mt-4 space-y-1.5 text-sm leading-relaxed text-navy-100 not-italic">
                <p className="font-medium text-white">{address.fullAddress}</p>
                <p className="text-xs text-navy-100/85">Landmark: {address.landmark}</p>
              </address>

              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </PrimaryButton>
              </div>
            </Card>
          </m.div>

          {/* Right Column: Validated WhatsApp Enquiry Form */}
          <m.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <Suspense fallback={<EnquiryFormSkeleton />}>
              <EnquiryForm />
            </Suspense>
          </m.div>
        </div>
      </Container>
    </Section>
  );
}
