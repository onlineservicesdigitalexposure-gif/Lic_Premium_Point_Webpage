import { BUSINESS_INFO } from '../data/businessInfo';

/**
 * Formats a 10-digit Indian phone number into a tel: URI.
 * @param {string} phone
 * @returns {string}
 */
export function formatTelHref(phone) {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) {
    return `tel:+91${digits}`;
  }
  if (digits.startsWith('91') && digits.length === 12) {
    return `tel:+${digits}`;
  }
  return `tel:${digits}`;
}

/**
 * Formats a WhatsApp chat URL with an optional pre-filled message.
 * @param {string} [message]
 * @returns {string}
 */
export function formatWhatsAppHref(message = '') {
  const base = BUSINESS_INFO.contact.whatsappUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a pre-filled WhatsApp enquiry URL for LIC PREMIUM POINT.
 * @param {object} values
 * @returns {string}
 */
export function buildEnquiryWhatsAppHref(values) {
  const lines = [
    `Hello ${BUSINESS_INFO.ownerName} (${BUSINESS_INFO.businessName}),`,
    '',
    'I would like to make an enquiry:',
    `• Name: ${values.fullName}`,
    `• Phone: ${values.phone}`,
    values.email ? `• Email: ${values.email}` : null,
    `• Service Interested In: ${values.serviceType}`,
    `• Message: ${values.message}`,
  ].filter((line) => line !== null);

  return formatWhatsAppHref(lines.join('\n'));
}

/**
 * Formats an email address into a mailto: URI with optional subject and body.
 * @param {string} email
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string}
 */
export function formatMailtoHref(email = BUSINESS_INFO.contact.email, subject = '', body = '') {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

/**
 * Builds a pre-filled email body from enquiry form values (frontend-only fallback).
 * @param {object} values
 * @returns {string}
 */
export function buildEnquiryMailtoHref(values) {
  const subject = `Enquiry from ${values.fullName} — ${values.serviceType}`;
  const lines = [
    `Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    `Service Interested In: ${values.serviceType}`,
    values.message ? `Message: ${values.message}` : null,
  ].filter(Boolean);

  return formatMailtoHref(BUSINESS_INFO.contact.email, subject, lines.join('\n'));
}
