import { MapPin, Phone } from 'lucide-react';
import Container from '../common/Container';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { formatTelHref } from '../../utils/contact';

/**
 * Top announcement strip displaying brand welcome message and quick verified contact details.
 */
export default function AnnouncementBar() {
  const { contact, address } = BUSINESS_INFO;

  return (
    <div className="border-b border-white/10 bg-navy-900 py-2 text-xs text-navy-100">
      <Container className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-2 font-medium text-white">
          <span
            className="inline-block h-2 w-2 shrink-0 rounded-full bg-lic-yellow"
            aria-hidden="true"
          />
          <span>Welcome to LIC Premium Point | Belgharia, Kolkata</span>
        </p>

        <div className="hidden items-center gap-5 md:flex">
          <span className="inline-flex items-center gap-1.5 text-navy-100/90">
            <MapPin className="h-3.5 w-3.5 text-lic-yellow" aria-hidden="true" />
            <span>Near {address.landmark}</span>
          </span>
          <a
            href={formatTelHref(contact.primaryPhone)}
            className="inline-flex items-center gap-1.5 font-semibold text-lic-yellow transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{contact.primaryPhoneDisplay}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
