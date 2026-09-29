export interface CompanyProfileInfo {
  name: string;
  brandName: string;
  tagline: string;
  legalEntity: string;
  description: string;
  vision: string;
  missions: string[];
  coreValues: {
    title: string;
    keyword: string;
    description: string;
  }[];
  foundedYear: number;
  headquarters: string;
  branchOffices: string[];
  email: string;
  phone: string;
  certifications: string[];
  socials: {
    linkedin: string;
    instagram: string;
    youtube: string;
  };
}

export interface BusinessUnit {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'konstruksi' | 'energi' | 'logistik' | 'teknologi';
  description: string;
  keyHighlights: string[];
  scopeServices: string[];
  icon: string;
  statNumber: string;
  statLabel: string;
}

export interface LandmarkProject {
  id: string;
  name: string;
  category: string;
  location: string;
  client: string;
  yearCompleted: string;
  investmentScale: string;
  description: string;
  image: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  category: 'direksi' | 'komisaris';
  education: string;
  bio: string;
  initials: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  highlightBadge?: string;
}

export interface CorporateStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface PartnerClient {
  id: string;
  name: string;
  category: string;
}

export interface CompanyFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PartnershipInquiry {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  businessSector: string;
  inquiryType: 'kemitraan' | 'tender' | 'vendor' | 'umum';
  message: string;
}
