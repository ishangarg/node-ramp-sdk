import { Page } from "src/commontypes";
export declare type FieldOption = {
    id: string;
    value: string;
};
export declare type CustomFieldOption = {
    created_at: string;
    id: string;
    is_active: boolean;
    ramp_id: string;
    remote_code: string;
    updated_at: string;
    value: string;
};
export declare type CustomFieldOptions = {
    data: CustomFieldOption[];
    page: Page;
};
export declare type CustomAccountingField = {
    created_at: string;
    id: string;
    input_type: string;
    is_active: boolean;
    is_splittable: boolean;
    name: string;
    ramp_id: string;
    updated_at: string;
};
export declare type CustomAccountingFields = {
    data: CustomAccountingField[];
    page: Page;
};
export declare type Uploaded = {
    uploaded: any[];
};
