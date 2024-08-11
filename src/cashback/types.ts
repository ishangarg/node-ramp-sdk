import { Page } from "src/commontypes";


export declare type Amount = {
    amount: number;
    currency_code: string;
}

export declare type CashbackData = {
    amount: Amount[];
    created_at: string;
    entity_id: string;
    id: string;
    page: Page;
}