import { Base } from "src/base";
import { CashbackData } from "./types";

export class CashbackAPI extends Base{

    getCashbackPayments(entity_id?:string, statement_id?:string, sync_ready?:string, from_date?:string, to_date?:string, start?:string, page_size?:number): Promise<CashbackData>{
        const params = {
            'entity_id': entity_id,
            'statement_id': statement_id,
            'sync_ready':sync_ready,
            'from_date': from_date,
            'to_date': to_date,
            'start':start,
            'page_size':page_size
        }

        const requestInit: RequestInit = {
            method: 'GET',
            body: JSON.stringify(params)
        }
        return this.invoke('cashbacks', requestInit)
    }

}