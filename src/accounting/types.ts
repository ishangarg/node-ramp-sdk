import { Page } from "src/commontypes";


export declare type FieldOption = {
    id: string;
    value: string;
}

export declare type CustomFieldOption = {
    created_at: string;
    id: string;
    is_active: boolean;
    ramp_id: string;
    remote_code: string;
    updated_at: string;
    value: string;
}

export declare type CustomFieldOptions = {
    data: CustomFieldOption[];
    page: Page;
}

export declare type CustomAccountingField = {
    created_at: string;
    id: string;
    input_type: string;
    is_active: boolean;
    is_splittable: boolean;
    name: string;
    ramp_id: string;
    updated_at: string;
}

export declare type CustomAccountingFields = {
    data: CustomAccountingField[];
    page: Page
}

export declare type Uploaded = {
    uploaded: any[];
}

export declare type AccountingConnection = {
    created_at: string;
    id: string;
    remote_provider_name: string;
}

export declare type LedgerAccount = {
    classification: string;
    code: string;
    created_at: string;
    id: string;
    is_active: boolean;
    name: string;
    ramp_id: string;
    updated_at: string;
}

export declare type LedgerAccounts = {
    data: LedgerAccount[];
    page: Page;
}

export declare type GLAccounts = {
    classification: string;
    code: string;
    id: string;
    name: string;
}

export declare type GLAccount = {
    classification: string;
    code: string;
    created_at: string;
    id: string;
    is_active: boolean;
    name: string;
    ramp_id: string;
    updated_at: string;
}