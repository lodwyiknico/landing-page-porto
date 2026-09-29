import type { Metadata, Viewport } from 'next';
import './globals.css';
import {
  companyProfileData,
  businessUnitsData,
  companyFAQsData,
} from '@/infrastructure/data/companyData';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateServicesSchema,
  generateFAQSchema,
} from '@/infrastructure/seo/jsonLd';

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mahakarya-group.co.id'),
  title: {
    default: 'PT Mahakarya Nusantara Holding | Membangun Peradaban, Menghubungkan Nusantara',
    template: '%s | PT Mahakarya Nusantara Holding',
  },
  description:
    'Profil resmi PT Mahakarya Nusantara Holding (Mahakarya Group). Konglomerasi infrastruktur terpadu, energi bersih terbarukan (EBT), logistik maritim, dan rekayasa industri terdepan di Indonesia dengan kepatuhan ISO & standar K3 kelas dunia.',
  keywords: [
    'PT Mahakarya Nusantara Holding',
    'Mahakarya Group',
    'Company Profile Perusahaan Indonesia',
    'Perusahaan Infrastruktur Terpadu',
    'Energi Bersih Terbarukan EBT Indonesia',
    'Pembangkit Listrik Tenaga Surya PLTS',
    'Logistik Maritim Nasional',
    'Jembatan Bentang Panjang Indonesia',
    'SCBD Jakarta Perkantoran',
    'Tata Kelola Perusahaan GCG',
    'Kemitraan BUMN dan Swasta',
  ],
  authors: [{ name: companyProfileData.name, url: 'https://mahakarya-group.co.id' }],
  creator: companyProfileData.name,
  publisher: companyProfileData.legalEntity,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://mahakarya-group.co.id',
    languages: {
      'id-ID': 'https://mahakarya-group.co.id/',
    },
  },
  openGraph: {
    title: 'PT Mahakarya Nusantara Holding | Membangun Peradaban, Menghubungkan Nusantara',
    description:
      'Konglomerasi infrastruktur, energi bersih terbarukan, dan rantai pasok maritim Indonesia. Berpengalaman 18+ tahun dengan komitmen tata kelola unggul (GCG) dan zero accident.',
    url: 'https://mahakarya-group.co.id',
    siteName: companyProfileData.name,
    images: [
      {
        url: '/images/corporate-hq.jpg',
        width: 1200,
        height: 675,
        alt: 'Menara Satu Mahakarya SCBD Jakarta - Kantor Pusat PT Mahakarya Nusantara Holding',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Mahakarya Nusantara Holding | Mahakarya Group',
    description:
      'Membangun Peradaban, Menghubungkan Nusantara. Rekam jejak 18+ tahun infrastruktur dan energi bersih terbarukan Indonesia.',
    images: ['/images/corporate-hq.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema(companyProfileData);
  const websiteSchema = generateWebSiteSchema(companyProfileData);
  const servicesSchema = generateServicesSchema(businessUnitsData);
  const faqSchema = generateFAQSchema(companyFAQsData);

  return (
    <html lang="id">
      <head>
        {/* Inject Structured Data Schema.org untuk Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
