import { Base } from "./base";
import { BillingAPI } from "./bills";
import { AccountingAPI } from "./accounting";
import { applyMixins } from "./utils";

class RampSDK extends Base{

}

interface RampSDK extends BillingAPI, AccountingAPI{}

applyMixins(RampSDK, [BillingAPI, AccountingAPI])

export default RampSDK