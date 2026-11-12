const DEFAULT_SITE_URL = 'https://example.com';

export const BUSINESS_INFO = {
  businessName: 'LIC PREMIUM POINT',
  ownerName: 'Pallab Goswami',
  roleTitle: 'Independent LIC Agent & Insurance Assistance Point',
  address: {
    building: 'Lokenath Bhawan',
    street: '3 No Rifle Range Road',
    locality: 'Belgharia',
    city: 'Kolkata',
    state: 'West Bengal',
    postalCode: '700056',
    country: 'India',
    landmark: 'UCO Bank, Belgharia 4 No Platform',
    fullAddress:
      'Lokenath Bhawan, 3 No Rifle Range Road, Belgharia, Kolkata, West Bengal, 700056',
  },
  contact: {
    primaryPhone: '9331004923',
    primaryPhoneE164: '+91-9331004923',
    primaryPhoneDisplay: '+91 93310 04923',
    secondaryPhone: '8777644926',
    secondaryPhoneE164: '+91-8777644926',
    secondaryPhoneDisplay: '+91 87776 44926',
    email: 'pallabgo@gmail.com',
    whatsappUrl: 'https://wa.me/919331004923',
    mapsUrl: 'https://maps.app.goo.gl/V9JcQ1P54pv6sGGW9',
  },
  seo: {
    // Replace VITE_SITE_URL or this placeholder once your production domain is confirmed
    siteUrl: import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL,
    title:
      'LIC Premium Point Kolkata | Pallab Goswami — LIC Agent in Belgharia',
    description:
      'Need life insurance assistance in Belgharia, Kolkata? Visit LIC Premium Point near Belgharia railway station (4 No Platform) and UCO Bank, or connect with LIC agent Pallab Goswami on 9331004923.',
    keywords: [
      'LIC agent in Belgharia',
      'LIC insurance agent in Belgharia',
      'LIC Premium Point Kolkata',
      'Life insurance assistance in Belgharia',
      'LIC agent near Belgharia railway station',
      'Pallab Goswami Belgharia',
    ],
  },
};
