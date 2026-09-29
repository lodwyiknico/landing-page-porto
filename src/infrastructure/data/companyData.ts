import {
  CompanyProfileInfo,
  BusinessUnit,
  LandmarkProject,
  LeadershipMember,
  CompanyMilestone,
  CorporateStat,
  PartnerClient,
  CompanyFAQ,
} from '@/domain/entities';

export const companyProfileData: CompanyProfileInfo = {
  name: 'PT Mahakarya Nusantara Holding',
  brandName: 'Mahakarya Group',
  legalEntity: 'Perseroan Terbatas (PT) Terbuka',
  tagline: 'Membangun Peradaban, Menghubungkan Nusantara',
  description:
    'PT Mahakarya Nusantara Holding adalah konglomerasi infrastruktur, energi bersih terbarukan, logistik maritim, dan rekayasa industri terdepan di Indonesia. Berdiri sejak 2008, kami berdedikasi mewujudkan pembangunan berkelanjutan dengan tata kelola unggul (Good Corporate Governance) dan standar keselamatan kelas dunia.',
  vision:
    'Menjadi grup korporasi infrastruktur dan energi terbarukan paling terpercaya di Asia Tenggara yang memberikan nilai tambah berkelanjutan bagi seluruh pemangku kepentingan dan kedaulatan bangsa.',
  missions: [
    'Menyediakan infrastruktur strategis berkualitas tinggi dengan teknologi ramah lingkungan dan tepat guna.',
    'Mempercepat transisi energi hijau nasional melalui pengembangan pembangkit listrik terbarukan yang andal.',
    'Membangun ekosistem logistik maritim dan rantai pasok terintegrasi guna menekan disparitas ekonomi antar pulau.',
    'Menerapkan tata kelola perusahaan yang transparan, akuntabel, serta mengutamakan keselamatan kerja (Zero Accident).',
  ],
  coreValues: [
    {
      keyword: 'P',
      title: 'Profesionalisme',
      description: 'Bekerja dengan keahlian terbaik, presisi rekayasa tinggi, dan disiplin eksekusi tanpa kompromi.',
    },
    {
      keyword: 'I',
      title: 'Integritas',
      description: 'Menjunjung tinggi kejujuran moral, transparansi tata kelola, dan etika bisnis yang bersih.',
    },
    {
      keyword: 'R',
      title: 'Resiliensi',
      description: 'Adaptif menghadapi dinamika ekonomi global melalui inovasi teknologi dan efisiensi terukur.',
    },
    {
      keyword: 'M',
      title: 'Manfaat',
      description: 'Mendedikasikan setiap pencapaian bisnis untuk kemakmuran masyarakat dan kemajuan Indonesia.',
    },
    {
      keyword: 'A',
      title: 'Amanah',
      description: 'Menjaga kepercayaan mitra, investor, dan pemerintah dengan rekam jejak kepatuhan prima.',
    },
  ],
  foundedYear: 2008,
  headquarters: 'Menara Satu Mahakarya, Lantai 32-35, Kawasan Bisnis Terpadu SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190',
  branchOffices: [
    'Surabaya: Gedung Bumi Mandiri Tower II Lt. 14, Jl. Panglima Sudirman',
    'Balikpapan: Mahakarya Borneo Hub, Jl. Jenderal Sudirman No. 88',
    'Makassar: Graha Samudera Timur Lt. 8, Jl. Penghibur No. 12',
  ],
  email: 'sekretariat@mahakarya-group.co.id',
  phone: '+62 (21) 5299-8800',
  certifications: [
    'ISO 9001:2015 — Quality Management System',
    'ISO 14001:2015 — Environmental Management System',
    'ISO 45001:2018 — Occupational Health and Safety (K3)',
    'ISO 37001:2016 — Anti-Bribery Management System (SMAP)',
    'Sertifikasi SMK3 Kemenaker RI (Tingkat Lanjutan)',
    'CSMS (Contractor Safety Management System) Peringkat Platinum',
  ],
  socials: {
    linkedin: 'https://linkedin.com/company/mahakarya-group-indonesia',
    instagram: 'https://instagram.com/mahakaryagroup.id',
    youtube: 'https://youtube.com/@mahakaryanusanataraholding',
  },
};

export const corporateStatsData: CorporateStat[] = [
  {
    id: 'stat-years',
    value: '18+',
    label: 'Tahun Pengabdian',
    sublabel: 'Rekam jejak teruji membangun negeri sejak 2008.',
  },
  {
    id: 'stat-projects',
    value: '350+',
    label: 'Proyek Strategis Tuntas',
    sublabel: 'Tersebar di 34 provinsi dari Sabang hingga Merauke.',
  },
  {
    id: 'stat-workforce',
    value: '4.850+',
    label: 'Tenaga Kerja Profesional',
    sublabel: 'Insinyur, ahli K3, dan teknisi tersertifikasi internasional.',
  },
  {
    id: 'stat-safety',
    value: '0',
    label: 'Nir-Kecelakaan (Zero Accident)',
    sublabel: 'Penghargaan K3 Kemenaker selama 5 tahun berurutan.',
  },
];

export const businessUnitsData: BusinessUnit[] = [
  {
    id: 'unit-infra',
    slug: 'infrastruktur-konstruksi',
    title: 'Infrastruktur & Konstruksi Sipil Presisi',
    subtitle: 'Membangun jembatan bentang panjang, jalan tol lintas provinsi, bendungan, dan gedung bertingkat.',
    category: 'konstruksi',
    description:
      'Divisi konstruksi kami mengintegrasikan teknologi Building Information Modeling (BIM) level 5D untuk menghadirkan proyek infrastruktur dengan tingkat presisi mikron, durabilitas tinggi terhadap gempa, dan manajemen risiko terukur.',
    keyHighlights: [
      'Spesialis jembatan bentang panjang struktur cable-stayed & pelengkung baja',
      'Pengerjaan jalan tol layang (elevated expressway) berteknologi balance cantilever',
      'Penerapan material beton pracetak ramah lingkungan (green concrete)',
      'Sertifikasi kelayakan struktur berskala nasional & internasional',
    ],
    scopeServices: [
      'Rekayasa Sipil & Jembatan',
      'Jalan Bebas Hambatan & Terowongan',
      'Struktur Pelabuhan & Dermaga',
      'Bangunan Komersial Ramah Lingkungan',
    ],
    icon: 'construction',
    statNumber: '140+',
    statLabel: 'Proyek Infrastruktur',
  },
  {
    id: 'unit-energi',
    slug: 'energi-bersih-terbarukan',
    title: 'Energi Bersih Terbarukan (EBT)',
    subtitle: 'Pembangkit Listrik Tenaga Surya (PLTS), mikrohidro, dan sistem transmisi hijau masa depan.',
    category: 'energi',
    description:
      'Kami menjadi pelopor transisi energi terbarukan di Indonesia melalui pembangunan dan pengoperasian PLTS skala utilitas, PLTS atap industri, serta pembangkit listrik tenaga mikrohidro dengan efisiensi tinggi.',
    keyHighlights: [
      'Total portofolio kapasitas energi terpasang mencapai 280 MWp',
      'Integrasi Battery Energy Storage System (BESS) untuk stabilitas jaringan PLN',
      'Pengurangan emisi karbon lebih dari 450.000 ton CO2 per tahun',
      'Dukungan penuh program Net Zero Emission Indonesia 2060',
    ],
    scopeServices: [
      'PLTS Skala Utilitas (Solar Farm)',
      'PLTS Atap (C&I Rooftop Solar)',
      'Pembangkit Minihidro & Mikrohidro',
      'Substation & Jaringan Transmisi Listrik',
    ],
    icon: 'solar',
    statNumber: '280 MWp',
    statLabel: 'Kapasitas Energi Bersih',
  },
  {
    id: 'unit-logistik',
    slug: 'logistik-maritim-terpadu',
    title: 'Rantai Pasok & Logistik Maritim',
    subtitle: 'Armada kapal kargo, tongkang material, dan pergudangan logistik multimoda.',
    category: 'logistik',
    description:
      'Menghubungkan rantai pasok antar pulau dengan armada logistik mandiri, kapal tunda, dan fasilitas pergudangan berikat untuk menjamin kelancaran material proyek dan pasokan komoditas vital nasional.',
    keyHighlights: [
      'Pengelolaan armada 45+ unit tugboat dan tongkang berkapasitas besar',
      'Jaringan pergudangan logistik di 6 pelabuhan strategis Indonesia',
      'Sistem pemantauan armada berbasis satelit real-time 24 jam',
      'Ketepatan waktu pengiriman (On-Time Delivery SLA) mencapai 99,2%',
    ],
    scopeServices: [
      'Transportasi Kargo Berat Maritim',
      'Pergudangan Berikat & Distribusi',
      'Bongkar Muat Pelabuhan Khusus',
      'Manajemen Rantai Pasok Terintegrasi',
    ],
    icon: 'ship',
    statNumber: '45+',
    statLabel: 'Armada Kapal Aktif',
  },
  {
    id: 'unit-teknologi',
    slug: 'solusi-teknologi-industri',
    title: 'Rekayasa & Otomasi Industri Terpadu',
    subtitle: 'Digitalisasi fasilitas pabrik, sensor structural health monitoring (SHM), dan sistem IoT.',
    category: 'teknologi',
    description:
      'Mengembangkan solusi SCADA industri, sistem monitoring kesehatan jembatan dan bendungan secara real-time, serta otomasi fasilitas manufaktur guna meningkatkan efisiensi operasional.',
    keyHighlights: [
      'Sensor Structural Health Monitoring (SHM) untuk jembatan bentang panjang',
      'Sistem SCADA otomasi gardu listrik terstandarisasi IEC 61850',
      'Platform analitik aset industri berbasis kecerdasan buatan (AI predictive maintenance)',
      'Peningkatan efisiensi operasional mitra industri rata-rata 32%',
    ],
    scopeServices: [
      'Structural Health Monitoring System',
      'SCADA & Otomasi Fasilitas Industri',
      'Platform Digital Twin Infrastruktur',
      'Audit Efisiensi Energi Pabrik',
    ],
    icon: 'cpu',
    statNumber: '99.8%',
    statLabel: 'Akurasi Sensor SHM',
  },
];

export const landmarkProjectsData: LandmarkProject[] = [
  {
    id: 'proj-1',
    name: 'Jembatan Cable-Stayed Selat Nusantara',
    category: 'Infrastruktur Sipil',
    location: 'Jawa Timur — Madura Gateway',
    client: 'Kementerian Pekerjaan Umum & Perumahan Rakyat (PUPR)',
    yearCompleted: '2023',
    investmentScale: 'Rp 2,8 Triliun',
    description:
      'Pembangunan jembatan gantung kabel sepanjang 3,8 kilometer dengan bentang tengah bebas hambatan navigasi kapal niaga, dilengkapi sistem sensor kesehatan struktur berkesinambungan.',
    image: '/images/project-infra.jpg',
    impactMetrics: [
      { label: 'Panjang Total', value: '3.800 Meter' },
      { label: 'Waktu Tempuh', value: 'Pangkas 75%' },
      { label: 'Ketahanan Gempa', value: 'Skala 8.5 SR' },
    ],
    featured: true,
  },
  {
    id: 'proj-2',
    name: 'Pembangkit Listrik Tenaga Surya (PLTS) Lembah Surya',
    category: 'Energi Bersih Terbarukan',
    location: 'Sulawesi Selatan',
    client: 'PT Perusahaan Listrik Negara (Persero)',
    yearCompleted: '2024',
    investmentScale: 'Rp 1,4 Triliun',
    description:
      'Pengembangan PLTS terpasang seluas 180 hektar dengan 240.000 modul fotovoltaik monocrystalline berefisiensi tinggi, menyuplai listrik bersih untuk lebih dari 95.000 rumah tangga.',
    image: '/images/project-energy.jpg',
    impactMetrics: [
      { label: 'Kapasitas Puncak', value: '120 MWp' },
      { label: 'Reduksi Karbon', value: '185.000 Ton/Tahun' },
      { label: 'Elektrifikasi Bersih', value: '95.000 KK' },
    ],
    featured: true,
  },
  {
    id: 'proj-3',
    name: 'Kompleks Menara Terpadu Mahakarya SCBD',
    category: 'Gedung Komersial Hijau',
    location: 'Kawasan SCBD Lot 28, Jakarta',
    client: 'Konsorsium Investasi Swasta Nasional',
    yearCompleted: '2022',
    investmentScale: 'Rp 3,1 Triliun',
    description:
      'Menara perkantoran modern setinggi 48 lantai dengan sertifikasi Greenship Platinum dari Green Building Council Indonesia, menghemat konsumsi energi gedung hingga 38%.',
    image: '/images/corporate-hq.jpg',
    impactMetrics: [
      { label: 'Luas Bangunan', value: '115.000 m²' },
      { label: 'Sertifikasi Gedung', value: 'Greenship Platinum' },
      { label: 'Efisiensi Energi', value: '38% Hemat Listrik' },
    ],
    featured: true,
  },
];

export const leadershipMembersData: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Ir. H. Bambang Soedirman, M.Eng.',
    role: 'Komisaris Utama (Independent)',
    category: 'komisaris',
    education: 'Alumnus Teknik Sipil ITB & Massachusetts Institute of Technology (MIT)',
    bio: 'Berpengalaman lebih dari 35 tahun dalam tata kelola konstruksi nasional dan pernah mengemban tugas sebagai penasihat teknis Dewan Infrastruktur Nasional.',
    initials: 'BS',
  },
  {
    id: 'lead-2',
    name: 'Dr. Ir. Raden Wicaksono, M.B.A.',
    role: 'Direktur Utama (Chief Executive Officer)',
    category: 'direksi',
    education: 'Doktor Manajemen Stratejik UI & MBA INSEAD France',
    bio: 'Memimpin transformasi Mahakarya Group menjadi konglomerasi berdaya saing global dengan fokus diversifikasi energi terbarukan dan kepatuhan ESG tinggi.',
    initials: 'RW',
  },
  {
    id: 'lead-3',
    name: 'Ir. Siti Nurhaliza Siregar, M.Sc.',
    role: 'Direktur Operasional & Rekayasa Teknik',
    category: 'direksi',
    education: 'Magister Rekayasa Struktur TU Delft, Belanda',
    bio: 'Pakar struktur jembatan bentang panjang dan manajemen K3. Memimpin standarisasi operasional dan implementasi BIM 5D di seluruh unit kerja.',
    initials: 'SS',
  },
  {
    id: 'lead-4',
    name: 'Hendra Wijaya, S.E., Ak., CA, CPA',
    role: 'Direktur Keuangan & Manajemen Risiko',
    category: 'direksi',
    education: 'Sarjana Akuntansi Universitas Gadjah Mada (UGM)',
    bio: 'Lebih dari 20 tahun memimpin manajemen permodalan, restrukturisasi keuangan korporasi, serta penerapan sistem anti-penyuapan ISO 37001.',
    initials: 'HW',
  },
];

export const companyMilestonesData: CompanyMilestone[] = [
  {
    year: '2008',
    title: 'Awal Pendirian',
    description: 'Didirikan di Jakarta sebagai kontraktor spesialis pondasi berat dan rekayasa jembatan beton prategang.',
    highlightBadge: 'Pendirian',
  },
  {
    year: '2013',
    title: 'Ekspansi Skala Nasional',
    description: 'Dipercaya mengerjakan paket pembangunan jalan tol lintas Jawa dan dermaga peti kemas di pelabuhan utama.',
  },
  {
    year: '2017',
    title: 'Sertifikasi Terpadu & K3 Unggul',
    description: 'Mendapatkan akreditasi terpadu ISO 9001, ISO 14001, dan sertifikasi SMK3 dengan predikat Bendera Emas Kemenaker.',
  },
  {
    year: '2020',
    title: 'Inisiasi Divisi Energi Terbarukan',
    description: 'Meresmikan lini bisnis EBT dengan memenangkan tender PLTS skala utilitas dan merambah ke teknologi PLTS Atap komersial.',
    highlightBadge: 'Transisi Hijau',
  },
  {
    year: '2024',
    title: 'Holding Terintegrasi & Go Regional',
    description: 'Konsolidasi unit usaha menjadi Mahakarya Nusantara Holding dan mulai menggarap proyek kemitraan di kawasan Asia Tenggara.',
  },
  {
    year: '2026',
    title: 'Akselerasi Dekarbonisasi & Digitalisasi',
    description: 'Mengelola 350+ proyek selesai dan mendeklarasikan komitmen Net Zero Emisi 2040 dengan penerapan otomasi AI industri.',
    highlightBadge: 'Masa Kini',
  },
];

export const partnerClientsData: PartnerClient[] = [
  { id: 'part-1', name: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)', category: 'Pemerintah' },
  { id: 'part-2', name: 'PT Perusahaan Listrik Negara (Persero)', category: 'BUMN' },
  { id: 'part-3', name: 'PT Pertamina (Persero)', category: 'BUMN' },
  { id: 'part-4', name: 'PT Pelabuhan Indonesia (Pelindo)', category: 'BUMN' },
  { id: 'part-5', name: 'Kementerian Perhubungan Republik Indonesia', category: 'Pemerintah' },
  { id: 'part-6', name: 'Danantara Indonesia Sovereign Wealth', category: 'Institusi Keuangan' },
];

export const companyFAQsData: CompanyFAQ[] = [
  {
    id: 'faq-1',
    category: 'Profil & Legalitas',
    question: 'Bagaimana status legalitas dan struktur kepemilikan PT Mahakarya Nusantara Holding?',
    answer:
      'PT Mahakarya Nusantara Holding adalah perseroan terbatas terbuka yang berbadan hukum sah di Republik Indonesia, terdaftar di Kemenkumham, serta mematuhi seluruh ketentuan Otoritas Jasa Keuangan (OJK). Saham perseroan dimiliki oleh konsorsium pendiri nasional dan investor institusional strategis dengan struktur modal yang solid.',
  },
  {
    id: 'faq-2',
    category: 'Standar Mutu & Keselamatan',
    question: 'Apa saja sertifikasi mutu dan standar keselamatan kerja (K3) yang diterapkan di lapangan?',
    answer:
      'Seluruh proyek Mahakarya Group dikerjakan dengan kepatuhan ISO 9001 (Mutu), ISO 14001 (Lingkungan), ISO 45001 (K3), serta Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) Kemenaker dengan capaian Zero Accident selama 5 tahun berturut-turut. Kami juga mengadopsi ISO 37001 Sistem Manajemen Anti Penyuapan (SMAP).',
  },
  {
    id: 'faq-3',
    category: 'Kemitraan & Pengadaan',
    question: 'Bagaimana prosedur menjadi mitra vendor atau mengajukan tender kerja sama bisnis?',
    answer:
      'Kami membuka pintu kemitraan terbuka melalui proses pra-kualifikasi online (e-Procurement). Calon mitra, subkontraktor, maupun penyedia material dapat mendaftar melalui formulir kemitraan di website ini atau mengirimkan company profile serta dokumen legalitas ke bagian pengadaan resmi kami di vendor@mahakarya-group.co.id.',
  },
  {
    id: 'faq-4',
    category: 'Tanggung Jawab Sosial (CSR)',
    question: 'Apa komitmen Mahakarya Group terhadap pelestarian lingkungan dan pemberdayaan masyarakat sekitar proyek?',
    answer:
      'Melalui program "Mahakarya Peduli Negeri", kami mengalokasikan program CSR untuk penanaman pohon mangrove di pesisir, pelatihan vokasi pertukangan bersertifikat bagi pemuda lokal di sekitar area proyek, serta penyediaan sarana air bersih dan fasilitas pendidikan terpadu.',
  },
  {
    id: 'faq-5',
    category: 'Hubungan Investor',
    question: 'Di mana pihak investor dapat mengakses laporan tahunan dan keterbukaan informasi perseroan?',
    answer:
      'Laporan Tahunan (Annual Report), Laporan Keberlanjutan (Sustainability Report ESG), serta laporan keuangan audited tersedia dan diperbarui secara berkala di portal Hubungan Investor perseroan atau melalui kontak sekretaris perusahaan.',
  },
];
