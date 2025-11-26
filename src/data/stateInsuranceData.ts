import { statesGroup1 } from './stateInsuranceData1';
import { statesGroup2 } from './stateInsuranceData2';
import { statesGroup3 } from './stateInsuranceData3';
import { statesGroup4 } from './stateInsuranceData4';


export interface StateInsuranceInfo {
  state: string;
  abbreviation: string;
  department: string;
  phone: string;
  website: string;
  licenseVerification: string;
  complaintForm: string;
  freeLookPeriod: string;
  keyRights: string[];
}

const baseStates: StateInsuranceInfo[] = [
  {
    state: "Alabama", abbreviation: "AL", department: "Alabama Department of Insurance",
    phone: "(334) 269-3550", website: "https://www.aldoi.gov",
    licenseVerification: "https://www.aldoi.gov/Licensees/ProducerLicenseSearch.aspx",
    complaintForm: "https://www.aldoi.gov/Consumers/ComplaintForm.aspx",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Free policy review", "Unfair claims protection", "Appeal rights"]
  },
  {
    state: "Alaska", abbreviation: "AK", department: "Alaska Division of Insurance",
    phone: "(907) 269-7900", website: "https://www.commerce.alaska.gov/web/ins",
    licenseVerification: "https://www.commerce.alaska.gov/cbp/main/search/professional",
    complaintForm: "https://www.commerce.alaska.gov/web/ins/Consumers/FileaComplaint.aspx",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Timely processing", "Misrepresentation protection", "Replacement disclosure"]
  },
  {
    state: "Arizona", abbreviation: "AZ", department: "Arizona Department of Insurance",
    phone: "(602) 364-3100", website: "https://insurance.az.gov",
    licenseVerification: "https://insurance.az.gov/license-search",
    complaintForm: "https://insurance.az.gov/consumers/file-complaint",
    freeLookPeriod: "10 days life, 30 days LTC",
    keyRights: ["Medical privacy", "Anti-discrimination", "Independent review"]
  }
];

export const stateInsuranceData: StateInsuranceInfo[] = [
  ...baseStates,
  ...statesGroup1,
  ...statesGroup2,
  ...statesGroup3,
  ...statesGroup4
];

