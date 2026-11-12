import { z } from 'zod';

const INDIAN_PHONE_REGEX = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;

export const ENQUIRY_SERVICE_OPTIONS = [
  'Life Insurance Guidance',
  'Savings-Oriented Policy Guidance',
  'Financial Protection Planning',
  'Policy-Related Assistance',
  'Documentation Guidance',
  'Xerox & Photocopy Services',
  'General Enquiry',
];

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(80, 'Name must be 80 characters or fewer.'),

  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/[\s-]/g, ''))
    .refine((val) => INDIAN_PHONE_REGEX.test(val), {
      message: 'Please enter a valid 10-digit Indian mobile number.',
    }),

  email: z
    .string()
    .trim()
    .refine((val) => val === '' || z.string().email().safeParse(val).success, {
      message: 'Please enter a valid email address or leave it blank.',
    }),

  serviceType: z
    .string()
    .trim()
    .min(1, 'Please select a service you are interested in.'),

  message: z
    .string()
    .trim()
    .min(10, 'Please share a brief message (at least 10 characters).')
    .max(600, 'Message must be 600 characters or fewer.'),
});
