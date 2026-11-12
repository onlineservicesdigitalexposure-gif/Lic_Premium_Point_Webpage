import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Container from '../common/Container';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SECTION_IDS } from '../../data/navigation';
import { formatMailtoHref, formatTelHref, formatWhatsAppHref } from '../../utils/contact';

const FOOTER_LINKS = [
  { id: SECTION_IDS.HERO, label: 'Home' },
  { id: SECTION_IDS.ABOUT, label: 'About Pallab Goswami' },
  { id: SECTION_IDS.SERVICES, label: 'Services' },
  { id: SECTION_IDS.WHY_CHOOSE_US, label: 'Why Choose Us' },
  { id: SECTION_IDS.PROCESS, label: 'How It Works' },
  { id: SECTION_IDS.XEROX, label: 'Xerox & Photocopy' },
  { id: SECTION_IDS.FAQ, label: 'FAQ' },
  { id: SECTION_IDS.CONTACT, label: 'Contact' },
];

/**
 * Semantic site footer with verified NAP details, Google Maps directions, quick links, and required disclaimer.
 */
export default function Footer() {
  const { businessName, ownerName, address, contact } = BUSINESS_INFO;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-900 pt-8 pb-8 text-navy-100">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Short Business Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-lic-yellow/40 bg-navy-800 font-display text-xs font-extrabold text-lic-yellow"
                aria-hidden="true"
              >
                LP
              </span>
              <div>
                <h2 className="font-display text-lg font-bold tracking-tight text-white">
                  {businessName}
                </h2>
                <p className="text-xs font-semibold text-lic-yellow">{ownerName}</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100/85">
              A dedicated local life insurance assistance point in Belgharia, Kolkata—providing
              personal policy guidance, customer query support, and convenient on-site Xerox
              services.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={formatTelHref(contact.primaryPhone)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-lic-yellow hover:text-lic-yellow"
              >
                <Phone className="h-3.5 w-3.5 text-lic-yellow" aria-hidden="true" />
                <span>Call Now</span>
              </a>
              <a
                href={formatWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-lic-yellow hover:text-lic-yellow"
              >
                <MessageCircle className="h-3.5 w-3.5 text-lic-yellow" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-navy-100/85 transition-colors hover:text-lic-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Belgharia Office Address */}
          <div className="md:col-span-2 lg:col-span-5">
            <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Contact &amp; Office Location
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a
                    href={formatTelHref(contact.primaryPhone)}
                    className="font-semibold text-white hover:text-lic-yellow"
                  >
                    {contact.primaryPhone}
                  </a>
                  <span className="text-navy-100/50" aria-hidden="true">
                    /
                  </span>
                  <a
                    href={formatTelHref(contact.secondaryPhone)}
                    className="font-semibold text-white hover:text-lic-yellow"
                  >
                    {contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <a
                  href={formatMailtoHref(contact.email)}
                  className="break-all font-medium text-navy-100/90 hover:text-lic-yellow"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lic-yellow" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-navy-100/90">
                  <p>{address.fullAddress}</p>
                  <p className="mt-0.5 text-xs text-navy-100/75">
                    Landmark: {address.landmark}
                  </p>
                </address>
              </div>

              <div className="pt-1">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-lic-yellow underline decoration-lic-yellow/40 underline-offset-4 transition-colors hover:text-white"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="rounded-xl border border-white/10 bg-navy-950/60 p-4 text-xs leading-relaxed text-navy-100/80">
            <span className="font-semibold text-white">Disclaimer: </span>
            LIC Premium Point is an independently operated insurance assistance point. This website
            is not the official Life Insurance Corporation of India website. All insurance products,
            terms, benefits and policy decisions are subject to official LIC documentation and
            applicable terms.
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-2 text-xs text-navy-100/75 sm:flex-row sm:items-center">
            <p>
              © {currentYear} {businessName} ({ownerName}). Design &amp; Developed by{' '}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lic-yellow underline decoration-lic-yellow/40 underline-offset-2 transition-colors hover:text-white"
              >
                Digital Exposure Online Services
              </a>
            </p>
            <p>
              {address.locality}, {address.city}, {address.state} — {address.postalCode}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
