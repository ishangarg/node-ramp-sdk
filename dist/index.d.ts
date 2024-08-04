import { Base } from "./base";
import { BillingAPI } from "./bills";
import { AccountingAPI } from "./accounting";
declare class RampSDK extends Base {
}
interface RampSDK extends BillingAPI, AccountingAPI {
}
export default RampSDK;
