import { Page } from "src/commontypes";

export declare type CurrencyAmount = {
    amount: number;
    currency_code: string;
  };
  
export declare type LineItem = {
    accounting_field_selections: any[];
    amount: CurrencyAmount;
    memo: string;
  };
  
  export declare type Payment = {
    amount: CurrencyAmount;
    effective_date: string;
    payment_date: string;
    payment_method: string;
  };
  
  export declare type Vendor = {
    remote_id: string;
    remote_name: string;
    type: string;
  };
  
  export declare type Bill = {
    accounting_field_selections: any[];
    amount: CurrencyAmount;
    created_at: string;
    deep_link_url: string | null;
    due_at: string;
    entity_id: string;
    id: string;
    invoice_number: string;
    invoice_urls: string[];
    issued_at: string;
    line_items: LineItem[];
    payment: Payment;
    remote_id: string | null;
    status: string;
    vendor: Vendor;
  };
  

export declare type Bills = {
    data: Bill[];
    page: Page;
  };
  