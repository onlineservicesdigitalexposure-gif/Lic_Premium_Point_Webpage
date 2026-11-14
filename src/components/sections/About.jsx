import { useState, useEffect } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import officeBoardImage from '../../assets/images/image1.jpeg';
import advisorImage2 from '../../assets/images/image2.jpeg';
import advisorImage3 from '../../assets/images/image3.jpeg';
import advisorImage4 from '../../assets/images/image4.jpeg';
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

const PROFILE_SLIDES = [
  {
    id: 'signboard',
    src: officeBoardImage,
    alt: `${BUSINESS_INFO.businessName} office signboard for ${BUSINESS_INFO.ownerName} in ${BUSINESS_INFO.address.locality}`,
    title: 'Office Signboard',
    subtitle: 'Belgharia Service Desk',
    objectPosition: 'object-center',
    objectFit: 'object-contain',
    bgClass: 'bg-white',
  },
  {
    id: 'advisor-uniform',
    src: advisorImage2,
    alt: `${BUSINESS_INFO.ownerName} - Authorized LIC Insurance Advisor at Belgharia`,
    title: 'Authorized Advisor',
    subtitle: 'On-Field Client Assistance',
    objectPosition: 'object-[center_12%]',
    objectFit: 'object-cover',
    bgClass: 'bg-surface-light',
  },
  {
    id: 'advisor-docs',
    src: advisorImage3,
    alt: `${BUSINESS_INFO.ownerName} assisting with LIC policy paperwork and claims`,
    title: 'Policy Guidance',
    subtitle: 'Documentation & Claims Help',
    objectPosition: 'object-[center_24%]',
    objectFit: 'object-cover',
    bgClass: 'bg-surface-light',
  },
  {
    id: 'advisor-profile',
    src: advisorImage4,
    alt: `${BUSINESS_INFO.ownerName} - Experienced LIC Advisor serving Kolkata`,
    title: 'Client Advisory',
    subtitle: 'Personalized Insurance Planning',
    objectPosition: 'object-[center_18%]',
    objectFit: 'object-cover',
    bgClass: 'bg-surface-light',
  },
];

/**
 * Framed office board & advisor image gallery for LIC PREMIUM POINT with continuous 2s auto-rotation.
 */
function AdvisorProfileFrame() {
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images every 2 seconds (setTimeout 2000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PROFILE_SLIDES.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROFILE_SLIDES.length) % PROFILE_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROFILE_SLIDES.length);
  };

  const currentSlide = PROFILE_SLIDES[currentIndex];

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

        {/* Image Slideshow Frame */}
        <div className="rounded-lg border border-navy-100 bg-white p-2.5 shadow-xs sm:p-3.5">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded bg-surface-light">
            {PROFILE_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  } ${slide.bgClass}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={1024}
                    height={768}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`h-full w-full ${slide.objectFit} ${slide.objectPosition} select-none`}
                  />
                </div>
              );
            })}

            {/* Previous & Next manual control arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/65 text-white backdrop-blur-xs transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-navy-950 hover:scale-105 focus:opacity-100 focus:outline-none"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/65 text-white backdrop-blur-xs transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-navy-950 hover:scale-105 focus:opacity-100 focus:outline-none"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Bottom Caption & Pagination Bar */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-2 p-3 bg-gradient-to-t from-navy-950/80 via-navy-950/35 to-transparent pt-8">
              <div className="flex items-center gap-1.5 rounded-full bg-navy-950/70 px-2.5 py-1 text-[11px] font-medium text-white shadow-xs backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-lic-yellow animate-pulse" aria-hidden="true" />
                <span className="truncate max-w-[130px] sm:max-w-none">{currentSlide.title}</span>
                <span className="text-white/40">•</span>
                <span className="font-semibold text-lic-yellow">{currentIndex + 1}/{PROFILE_SLIDES.length}</span>
              </div>

              {/* Indicator dots */}
              <div
                className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-navy-950/60 px-2 py-1 backdrop-blur-xs"
                role="tablist"
                aria-label="Photo carousel navigation"
              >
                {PROFILE_SLIDES.map((slide, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View ${slide.title} (${index + 1} of ${PROFILE_SLIDES.length})`}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                        isActive
                          ? 'w-5 bg-lic-yellow shadow-xs'
                          : 'w-2 bg-white/60 hover:bg-white hover:scale-110'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
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
