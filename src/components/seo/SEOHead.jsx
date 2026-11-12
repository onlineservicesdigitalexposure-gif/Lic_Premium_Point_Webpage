import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { FAQ_ITEMS } from '../../data/faq';

/**
 * Manages document head metadata, Open Graph, Twitter Cards, canonical link, and verified JSON-LD schema.
 */
export default function SEOHead() {
  const { businessName, ownerName, address, contact, seo } = BUSINESS_INFO;
  const canonicalUrl = `${seo.siteUrl.replace(/\/$/, '')}/`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'InsuranceAgency',
        '@id': `${canonicalUrl}#organization`,
        name: businessName,
        alternateName: `LIC Premium Point - ${ownerName}`,
        description:
          'Independently operated life insurance assistance point in Belgharia, Kolkata managed by Pallab Goswami, offering policy guidance, customer query support, and on-site Xerox services.',
        url: canonicalUrl,
        telephone: contact.primaryPhoneE164,
        email: contact.email,
        hasMap: contact.mapsUrl,
        areaServed: {
          '@type': 'Place',
          name: 'Belgharia, Kolkata, West Bengal, India',
        },
        founder: {
          '@type': 'Person',
          name: ownerName,
          jobTitle: 'LIC Insurance Agent',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${address.building}, ${address.street} (Near ${address.landmark})`,
          addressLocality: `${address.locality}, ${address.city}`,
          addressRegion: address.state,
          postalCode: address.postalCode,
          addressCountry: 'IN',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: contact.primaryPhoneE164,
            contactType: 'customer service',
            areaServed: 'IN',
          },
          {
            '@type': 'ContactPoint',
            telephone: contact.secondaryPhoneE164,
            contactType: 'customer service',
            areaServed: 'IN',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: businessName,
        inLanguage: 'en-IN',
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content={ownerName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Regional context without unverified coordinates */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Belgharia, Kolkata" />

      {/* Open Graph Metadata */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* Schema.org Structured Data (Verified Details Only) */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
