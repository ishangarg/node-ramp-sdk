import { Base } from "src/base";
import { CompanyInformation, CompanyBalanceInformation } from "./types";

export class BusinessAPI extends Base{
    getCompanyInformation():Promise<CompanyInformation>{
        return this.invoke('business')
    }

    getCompanyBalanceInformation():Promise<CompanyBalanceInformation>{
        return this.invoke('business/balance')
    }
}