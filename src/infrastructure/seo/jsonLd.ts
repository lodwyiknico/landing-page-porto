import { CompanyProfileInfo, BusinessUnit, CompanyFAQ } from '@/domain/entities';

export function generateOrganizationSchema(company: CompanyProfileInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://mahakarya-group.co.id/#corporation',
    name: company.name,
    alternateName: company.brandName,
    legalName: company.name,
    url: 'https://mahakarya-group.co.id',
    logo: 'https://mahakarya-group.co.id/images/corporate-hq.jpg',
    description: company.description,
    foundingDate: `${company.foundedYear}`,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Menara Satu Mahakarya Lt. 32, SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12190',
      addressCountry: 'ID',
    },
    sameAs: [
      company.socials.linkedin,
      company.socials.instagram,
      company.socials.youtube,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: company.phone,
        contactType: 'Sekretariat Korporat & Kemitraan',
        availableLanguage: ['Indonesian', 'English'],
      },
    ],
  };
}

export function generateWebSiteSchema(company: CompanyProfileInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mahakarya-group.co.id/#website',
    url: 'https://mahakarya-group.co.id',
    name: `${company.name} - ${company.tagline}`,
    publisher: {
      '@id': 'https://mahakarya-group.co.id/#corporation',
    },
    inLanguage: ['id-ID'],
  };
}

export function generateServicesSchema(units: BusinessUnit[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Lini Bisnis & Portofolio PT Mahakarya Nusantara Holding',
    itemListElement: units.map((unit, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: unit.title,
        description: unit.subtitle,
        provider: {
          '@type': 'Organization',
          name: 'PT Mahakarya Nusantara Holding',
        },
      },
    })),
  };
}

export function generateFAQSchema(faqs: CompanyFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
