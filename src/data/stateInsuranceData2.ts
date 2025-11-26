import { StateInsuranceInfo } from './stateInsuranceData';

export const statesGroup2: StateInsuranceInfo[] = [
  {
    state: "Delaware", abbreviation: "DE", department: "Delaware Department of Insurance",
    phone: "(302) 674-7300", website: "https://insurance.delaware.gov",
    licenseVerification: "https://insurance.delaware.gov/license-search/",
    complaintForm: "https://insurance.delaware.gov/consumer-protection/file-complaint/",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Timely claim processing", "Fair underwriting", "Privacy protection"]
  },
  {
    state: "Florida", abbreviation: "FL", department: "Florida Department of Financial Services",
    phone: "(877) 693-5236", website: "https://www.myfloridacfo.com",
    licenseVerification: "https://apps.fldfs.com/LAP/",
    complaintForm: "https://www.myfloridacfo.com/division/consumers/complaint.htm",
    freeLookPeriod: "14 days life, 30 days LTC",
    keyRights: ["Extended free look", "Hurricane claim protections", "Mediation rights"]
  },
  {
    state: "Georgia", abbreviation: "GA", department: "Georgia Office of Insurance and Safety Fire Commissioner",
    phone: "(800) 656-2298", website: "https://www.oci.ga.gov",
    licenseVerification: "https://www.oci.ga.gov/licensee-search",
    complaintForm: "https://www.oci.ga.gov/consumer-services/file-complaint",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Claim investigation rights", "Anti-discrimination", "Policy cancellation notice"]
  },
  {
    state: "Hawaii", abbreviation: "HI", department: "Hawaii Insurance Division",
    phone: "(808) 586-2790", website: "https://cca.hawaii.gov/ins/",
    licenseVerification: "https://cca.hawaii.gov/ins/producer_search/",
    complaintForm: "https://cca.hawaii.gov/ins/consumer/complaint/",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Consumer assistance", "Rate review", "Policy disclosure rights"]
  }
];
