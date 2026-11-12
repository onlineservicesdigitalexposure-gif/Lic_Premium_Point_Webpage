import { m, useReducedMotion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import Badge from '../common/Badge';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import Section from '../common/Section';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';
import { formatTelHref, formatWhatsAppHref } from '../../utils/contact';

/**
 * Editorial vector visual depicting Indian family financial protection under a navy & gold canopy.
 */
function FamilyProtectionVisual() {
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Crisp architectural corner accent */}
      <div
        className="absolute -right-2 -bottom-2 h-full w-full rounded-xl border border-lic-yellow/40 sm:-right-2.5 sm:-bottom-2.5"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white p-4 shadow-2xl sm:p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-lic-yellow">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xs font-extrabold tracking-wide text-navy-900 uppercase">
                {businessName}
              </p>
              <p className="text-[11px] font-medium text-ink-secondary">
                {address.locality}, {address.city} — {address.postalCode}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-6 rounded-full bg-lic-yellow" />
            <span className="h-1.5 w-2 rounded-full bg-lic-red" />
          </div>
        </div>

        {/* Bespoke Indian family & financial protection SVG scene */}
        <div className="mt-3.5 overflow-hidden rounded-lg border border-navy-100 bg-surface-light sm:mt-4">
          <svg
            viewBox="0 0 460 250"
            className="h-auto w-full"
            role="img"
            aria-label="Illustration symbolizing financial protection and life insurance security for an Indian family"
          >
            <defs>
              <linearGradient id="skyWash" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F4F7FC" />
                <stop offset="100%" stopColor="#E5ECF7" />
              </linearGradient>
              <linearGradient id="shieldNavy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12377A" />
                <stop offset="100%" stopColor="#10264B" />
              </linearGradient>
            </defs>

            <rect width="460" height="250" fill="url(#skyWash)" />

            <circle cx="230" cy="130" r="96" fill="#FFFFFF" opacity="0.9" />
            <circle
              cx="230"
              cy="130"
              r="108"
              fill="none"
              stroke="#12377A"
              strokeOpacity="0.1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />

            {/* Protective Canopy */}
            <path
              d="M104 114C128 62 176 40 230 40C284 40 332 62 356 114C335 105 312 104 292 113C271 104 250 104 230 113C210 104 189 104 168 113C148 104 125 105 104 114Z"
              fill="url(#shieldNavy)"
            />
            <path
              d="M116 107C140 65 182 48 230 48C278 48 320 65 344 107"
              fill="none"
              stroke="#FFC928"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="230" cy="34" r="5" fill="#FFC928" />
            <line
              x1="230"
              y1="40"
              x2="230"
              y2="118"
              stroke="#10264B"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path d="M70 218H390" stroke="#DCE4F0" strokeWidth="2" strokeLinecap="round" />

            {/* Stylized Indian Family */}
            <circle cx="176" cy="134" r="14.5" fill="#10264B" />
            <path
              d="M150 218V176C150 161 161 152 176 152C191 152 202 161 202 176V218H150Z"
              fill="#12377A"
            />
            <path
              d="M172 152L176 178L180 152"
              stroke="#FFC928"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <circle cx="284" cy="138" r="13.5" fill="#10264B" />
            <circle cx="284" cy="131" r="2.2" fill="#ED1C24" />
            <path
              d="M260 218V178C260 163 270 154 284 154C298 154 308 163 308 178V218H260Z"
              fill="#1A4896"
            />
            <path
              d="M264 166C276 174 292 188 306 214"
              stroke="#FFC928"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            <circle cx="230" cy="159" r="11" fill="#10264B" />
            <path
              d="M212 218V189C212 178 220 172 230 172C240 172 248 178 248 189V218H212Z"
              fill="#FFC928"
            />

            {/* Protective Base Arcs */}
            <path
              d="M126 218C154 232 190 238 230 238C270 238 306 232 334 218"
              fill="none"
              stroke="#12377A"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M152 226C176 234 202 238 230 238C258 238 284 234 308 226"
              fill="none"
              stroke="#FFC928"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Shield Crest Badge */}
            <g transform="translate(362, 150)">
              <rect width="54" height="54" rx="12" fill="#FFFFFF" stroke="#DCE4F0" />
              <path
                d="M27 13L38 17.2V26.5C38 33.8 33.2 39 27 42C20.8 39 16 33.8 16 26.5V17.2L27 13Z"
                fill="#12377A"
              />
              <path
                d="M22.5 27.5L25.8 30.8L32.2 23.8"
                stroke="#FFC928"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* Verified Local Office Strip */}
        <div className="mt-3.5 grid gap-2.5 rounded-lg border border-border-subtle bg-surface-light px-3.5 py-3 sm:mt-4 sm:grid-cols-2 sm:px-4 sm:py-3.5">
          <div>
            <p className="text-[11px] font-bold tracking-wider text-navy-800 uppercase">
              Personal Advisor
            </p>
            <p className="mt-0.5 font-display text-sm font-bold text-ink">{ownerName}</p>
            <p className="mt-0.5 text-xs text-ink-secondary">Near {address.landmark}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-[11px] font-bold tracking-wider text-navy-800 uppercase">
              Direct Helplines
            </p>
            <a
              href={formatTelHref(contact.primaryPhone)}
              className="mt-0.5 block font-display text-sm font-bold text-navy-900 hover:text-navy-800"
            >
              {contact.primaryPhoneDisplay}
            </a>
            <a
              href={formatTelHref(contact.secondaryPhone)}
              className="block text-xs font-semibold text-ink-secondary hover:text-navy-800"
            >
              Alt: {contact.secondaryPhoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Responsive Hero section:
 * - Mobile (< lg): Badge + Headline + Tagline -> Protection Visual -> Action Buttons & Address
 * - Desktop (lg+): 2-column composition with copy/CTAs on left and visual on right
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { address, contact } = BUSINESS_INFO;

  const textTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

  const visualTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] };

  return (
    <Section
      id={SECTION_IDS.HERO}
      labelledBy="hero-heading"
      surface="navy"
      spacing="hero"
      className="relative"
    >
      {/* Subtle architectural hairline grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-7">
          {/* Block 1: Badge, Headline & Tagline */}
          <m.div
            className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={textTransition}
          >
            <Badge tone="darkSurface">
              <ShieldCheck className="h-3.5 w-3.5 text-lic-yellow" aria-hidden="true" />
              <span>Your Local Insurance Assistance Point</span>
            </Badge>

            <h1
              id="hero-heading"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
            >
              Plan Today.{' '}
              <span className="relative inline-block text-lic-yellow">
                Protect Tomorrow.
              </span>
            </h1>

            <p className="mt-4 max-w-xl border-l-2 border-lic-yellow/70 pl-4 text-base leading-relaxed text-navy-100 sm:mt-5 sm:text-lg">
              Get personalized guidance for your life insurance needs with Pallab Goswami at LIC
              Premium Point, Belgharia.
            </p>
          </m.div>

          {/* Block 2: Financial Protection Visual (Directly below tagline on mobile, right column on desktop) */}
          <m.div
            className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={visualTransition}
          >
            <FamilyProtectionVisual />
          </m.div>

          {/* Block 3: CTAs & Verified Local Contact Strip */}
          <m.div
            className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={textTransition}
          >
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <PrimaryButton
                href={formatTelHref(contact.primaryPhone)}
                variant="primary"
                size="lg"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Now</span>
              </PrimaryButton>

              <PrimaryButton
                href={formatWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlineDark"
                size="lg"
              >
                <MessageCircle className="h-4 w-4 text-lic-yellow" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </PrimaryButton>
            </div>

            <div className="mt-7 grid gap-4 border-t border-white/15 pt-5 text-xs text-navy-100 sm:grid-cols-2 sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Belgharia Office</p>
                  <p className="mt-0.5 text-navy-100/85">
                    {address.building}, {address.street}, {address.locality} — {address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Phone &amp; Alt Helpline</p>
                  <p className="mt-0.5 text-navy-100/90">
                    <a
                      href={formatTelHref(contact.primaryPhone)}
                      className="underline decoration-white/30 underline-offset-2 hover:text-lic-yellow"
                    >
                      {contact.primaryPhoneDisplay}
                    </a>{' '}
                    /{' '}
                    <a
                      href={formatTelHref(contact.secondaryPhone)}
                      className="underline decoration-white/30 underline-offset-2 hover:text-lic-yellow"
                    >
                      {contact.secondaryPhoneDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  );
}
