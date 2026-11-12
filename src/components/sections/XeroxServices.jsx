import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Copy, MapPin, Printer } from 'lucide-react';
import Badge from '../common/Badge';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';

/**
 * Clean bespoke photocopy & document illustration tailored to the navy/gold design system.
 */
function PhotocopyVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute -right-2.5 -bottom-2.5 h-full w-full rounded-xl border border-lic-yellow/40"
        aria-hidden="true"
      />

      <div className="relative rounded-xl border border-white/15 bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-lic-yellow">
              <Printer className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-navy-900">Photocopy Desk</p>
              <p className="text-[11px] font-medium text-ink-secondary">Available Walk-In</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-surface-light px-2.5 py-1 text-[11px] font-semibold text-navy-800">
            <Copy className="h-3 w-3" aria-hidden="true" />
            <span>Xerox</span>
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-navy-100 bg-surface-light p-4">
          <svg
            viewBox="0 0 300 170"
            className="h-auto w-full"
            role="img"
            aria-label="Illustration of a photocopy machine and neatly stacked documents"
          >
            <circle cx="150" cy="86" r="68" fill="#FFFFFF" />

            <rect
              x="64"
              y="32"
              width="76"
              height="44"
              rx="4"
              fill="#E5ECF7"
              stroke="#12377A"
              strokeWidth="2"
            />
            <line
              x1="76"
              y1="44"
              x2="128"
              y2="44"
              stroke="#12377A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
            <line
              x1="76"
              y1="54"
              x2="116"
              y2="54"
              stroke="#12377A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />

            <rect x="74" y="62" width="152" height="14" rx="5" fill="#10264B" />
            <rect x="192" y="66" width="24" height="5" rx="2.5" fill="#FFC928" />

            <rect x="68" y="76" width="164" height="66" rx="8" fill="#12377A" />
            <rect x="84" y="90" width="72" height="36" rx="5" fill="#10264B" />

            <circle cx="182" cy="96" r="5" fill="#FFC928" />
            <circle cx="198" cy="96" r="4" fill="#FFFFFF" opacity="0.8" />
            <circle cx="212" cy="96" r="4" fill="#ED1C24" />
            <rect x="176" y="110" width="42" height="10" rx="3" fill="#FFFFFF" opacity="0.2" />

            <path
              d="M96 114H144V150C144 153 142 155 139 155H101C98 155 96 153 96 150V114Z"
              fill="#FFFFFF"
              stroke="#10264B"
              strokeWidth="2"
            />
            <line x1="106" y1="126" x2="134" y2="126" stroke="#12377A" strokeWidth="2" strokeLinecap="round" />
            <line
              x1="106"
              y1="135"
              x2="134"
              y2="135"
              stroke="#12377A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.55"
            />
            <line x1="106" y1="144" x2="126" y2="144" stroke="#FFC928" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Visually distinct Xerox & Photocopy Services showcase section.
 */
export default function XeroxServices() {
  const prefersReducedMotion = useReducedMotion();
  const { address } = BUSINESS_INFO;

  return (
    <Section id={SECTION_IDS.XEROX} labelledBy="xerox-heading" surface="white">
      <Container>
        <m.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
          className="surface-navy-gradient relative overflow-hidden rounded-2xl border border-navy-700/40 p-7 shadow-xl sm:p-10 lg:p-12"
        >
          {/* Crisp architectural accent line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lic-yellow via-lic-yellow to-lic-red"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Badge tone="darkSurface">
                <Copy className="h-3.5 w-3.5 text-lic-yellow" aria-hidden="true" />
                <span>On-Site Document Convenience</span>
              </Badge>

              <h2
                id="xerox-heading"
                className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                Xerox &amp; Photocopy Services
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
                Convenient photocopy services available at LIC Premium Point, Belgharia.
              </p>

              <p className="mt-4 flex items-start gap-2.5 text-sm text-navy-100/90">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <span>
                  {address.fullAddress} (Near {address.landmark})
                </span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryButton href={`#${SECTION_IDS.CONTACT}`} variant="primary" size="lg">
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhotocopyVisual />
            </div>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
