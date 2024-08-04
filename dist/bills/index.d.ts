import { Base } from "src/base";
import { Bills, Bill } from "./types";
export declare class BillingAPI extends Base {
    getBills(params: object): Promise<Bills>;
    getBillById(bill_id: string): Promise<Bill>;
}
