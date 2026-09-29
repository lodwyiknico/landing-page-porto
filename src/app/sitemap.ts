import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mahakarya-group.co.id';
  const lastModified = new Date();

  const sections = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '#tentang-kami', priority: 0.9, freq: 'monthly' as const },
    { path: '#lini-bisnis', priority: 0.9, freq: 'weekly' as const },
    { path: '#proyek-strategis', priority: 0.8, freq: 'monthly' as const },
    { path: '#dewan-direksi', priority: 0.7, freq: 'monthly' as const },
    { path: '#rekam-jejak', priority: 0.7, freq: 'monthly' as const },
    { path: '#tata-kelola-faq', priority: 0.7, freq: 'monthly' as const },
    { path: '#kontak-kemitraan', priority: 0.9, freq: 'monthly' as const },
  ];

  return sections.map((sec) => ({
    url: `${baseUrl}/${sec.path}`,
    lastModified,
    changeFrequency: sec.freq,
    priority: sec.priority,
  }));
}
