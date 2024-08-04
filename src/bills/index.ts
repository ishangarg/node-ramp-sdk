import { Base } from "src/base";
import { Bills, Bill } from "./types";

export class BillingAPI extends Base {
    getBills(params: object): Promise<Bills>{
        return this.invoke('bills', params)
    }

    getBillById(bill_id: string):Promise<Bill>{
        return this.invoke(`bills/${bill_id}`)
    }
}