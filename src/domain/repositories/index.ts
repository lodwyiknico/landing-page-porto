import {
  CompanyProfileInfo,
  BusinessUnit,
  LandmarkProject,
  LeadershipMember,
  CompanyMilestone,
  CorporateStat,
  PartnerClient,
  CompanyFAQ,
} from '../entities';

export interface ICompanyProfileRepository {
  getProfile(): CompanyProfileInfo;
  getStats(): CorporateStat[];
  getBusinessUnits(): BusinessUnit[];
  getProjects(): LandmarkProject[];
  getLeadership(): LeadershipMember[];
  getMilestones(): CompanyMilestone[];
  getPartners(): PartnerClient[];
  getFAQs(): CompanyFAQ[];
}
