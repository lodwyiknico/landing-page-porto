import { ICompanyProfileRepository } from '@/domain/repositories';
import {
  companyProfileData,
  corporateStatsData,
  businessUnitsData,
  landmarkProjectsData,
  leadershipMembersData,
  companyMilestonesData,
  partnerClientsData,
  companyFAQsData,
} from '../data/companyData';
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

export class CompanyProfileRepository implements ICompanyProfileRepository {
  getProfile(): CompanyProfileInfo {
    return companyProfileData;
  }
  getStats(): CorporateStat[] {
    return corporateStatsData;
  }
  getBusinessUnits(): BusinessUnit[] {
    return businessUnitsData;
  }
  getProjects(): LandmarkProject[] {
    return landmarkProjectsData;
  }
  getLeadership(): LeadershipMember[] {
    return leadershipMembersData;
  }
  getMilestones(): CompanyMilestone[] {
    return companyMilestonesData;
  }
  getPartners(): PartnerClient[] {
    return partnerClientsData;
  }
  getFAQs(): CompanyFAQ[] {
    return companyFAQsData;
  }
}

export const corporateRepo = new CompanyProfileRepository();
