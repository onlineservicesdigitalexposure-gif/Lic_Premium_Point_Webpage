import { BUSINESS_INFO } from './businessInfo';

const { address, contact, ownerName, businessName } = BUSINESS_INFO;

export const FAQ_ITEMS = [
  {
    id: 'location',
    question: 'Where is LIC Premium Point located?',
    answer: `${businessName} is located at ${address.fullAddress}, near ${address.landmark}.`,
  },
  {
    id: 'contact-pallab',
    question: 'How can I contact Pallab Goswami?',
    answer: `You can call ${ownerName} directly on ${contact.primaryPhone} or ${contact.secondaryPhone}, send an email to ${contact.email}, or submit your details through the enquiry form in the Contact section.`,
  },
  {
    id: 'lic-guidance',
    question: 'Can I get guidance about LIC policies?',
    answer: `Yes. You can speak directly with ${ownerName} at ${businessName} for personalized guidance on life insurance options, savings-oriented policies, general policy-related queries, and required documentation.`,
  },
  {
    id: 'whatsapp-contact',
    question: 'Can I contact the office through WhatsApp?',
    answer: `Yes. You can message on WhatsApp directly at ${contact.primaryPhoneDisplay} using the "Chat on WhatsApp" buttons on this page.`,
  },
  {
    id: 'xerox-service',
    question: 'Is Xerox service available at the office?',
    answer: `Yes. Xerox and photocopy services are available at ${businessName} in ${address.locality}, ${address.city}.`,
  },
  {
    id: 'find-location',
    question: 'How can I find the office location?',
    answer: `Look for ${address.building} on ${address.street} near ${address.landmark} (${address.locality}, ${address.city} ${address.postalCode}). You can also open directions directly via our Google Maps link in the Contact section.`,
  },
];
