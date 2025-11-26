import { StateInsuranceInfo } from './stateInsuranceData';

export const statesGroup1: StateInsuranceInfo[] = [
  {
    state: "Arkansas", abbreviation: "AR", department: "Arkansas Insurance Department",
    phone: "(501) 371-2600", website: "https://insurance.arkansas.gov",
    licenseVerification: "https://www.ark.org/insurance/producer_search/",
    complaintForm: "https://insurance.arkansas.gov/pages/consumers/file-a-complaint/",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Fair claim settlement", "Anti-churning protection", "Policy document rights"]
  },
  {
    state: "California", abbreviation: "CA", department: "California Department of Insurance",
    phone: "(800) 927-4357", website: "https://www.insurance.ca.gov",
    licenseVerification: "https://interactive.web.insurance.ca.gov/apex_extprd/f?p=102:1",
    complaintForm: "https://www.insurance.ca.gov/01-consumers/101-help/",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Language assistance", "Prop 103 protection", "Rate justification", "Anti-redlining"]
  },
  {
    state: "Colorado", abbreviation: "CO", department: "Colorado Division of Insurance",
    phone: "(303) 894-7490", website: "https://doi.colorado.gov",
    licenseVerification: "https://apps.colorado.gov/dora/licensing/lookup/",
    complaintForm: "https://doi.colorado.gov/consumer-services/file-a-complaint",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Prompt claim payment", "Anti-discrimination", "External review rights"]
  },
  {
    state: "Connecticut", abbreviation: "CT", department: "Connecticut Insurance Department",
    phone: "(860) 297-3800", website: "https://portal.ct.gov/cid",
    licenseVerification: "https://www.elicense.ct.gov/Lookup/",
    complaintForm: "https://portal.ct.gov/CID/Consumers/File-a-Complaint",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Free look period", "Claim appeal rights", "Policy replacement disclosure"]
  }
];
