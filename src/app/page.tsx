import { corporateRepo } from '@/infrastructure/repositories/companyRepository';

import { Navbar } from '@/features/navbar/Navbar';
import { Hero } from '@/features/hero/Hero';
import { StatsBar } from '@/features/stats/StatsBar';
import { AboutSection } from '@/features/about/AboutSection';
import { ServicesSection } from '@/features/services/ServicesSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { LeadershipSection } from '@/features/leadership/LeadershipSection';
import { MilestonesSection } from '@/features/milestones/MilestonesSection';
import { PartnersSection } from '@/features/partners/PartnersSection';
import { FAQSection } from '@/features/faq/FAQSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { Footer } from '@/features/footer/Footer';

export default function CompanyProfileHomePage() {
  // Clean Architecture: Mengambil data korporat melalui repositori terabstraksi
  const profile = corporateRepo.getProfile();
  const stats = corporateRepo.getStats();
  const businessUnits = corporateRepo.getBusinessUnits();
  const projects = corporateRepo.getProjects();
  const leadership = corporateRepo.getLeadership();
  const milestones = corporateRepo.getMilestones();
  const partners = corporateRepo.getPartners();
  const faqs = corporateRepo.getFAQs();

  return (
    <>
      <Navbar companyName={profile.brandName} />

      <main id="main-content">
        <Hero companyName={profile.name} />
        <StatsBar stats={stats} />
        <AboutSection company={profile} />
        <ServicesSection businessUnits={businessUnits} />
        <ProjectsSection projects={projects} />
        <PartnersSection partners={partners} />
        <LeadershipSection leadership={leadership} />
        <MilestonesSection milestones={milestones} />
        <FAQSection faqs={faqs} />
        <ContactSection company={profile} />
      </main>

      <Footer company={profile} />
    </>
  );
}
