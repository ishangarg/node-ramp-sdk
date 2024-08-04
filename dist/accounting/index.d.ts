import { Base } from "src/base";
import { FieldOption, Uploaded, CustomFieldOption, CustomFieldOptions, CustomAccountingField, CustomAccountingFields } from "./types";
export declare class AccountingAPI extends Base {
    getAccountingOptions(fieldId: string, start?: string, pageSize?: number, isActive?: boolean): Promise<CustomFieldOptions>;
    postNewAccountingFieldOptions(fieldOptions: FieldOption[]): Promise<Uploaded>;
    getCustomAccountingOption(field_option_id: string): Promise<CustomFieldOption>;
    updateCustomAccountingOption(field_option_id: string, reactivate?: boolean, value?: string): Promise<CustomFieldOption>;
    deleteCustomAccountingFieldOption(field_option_id: string): Promise<unknown>;
    listCustomAccountingFields(start?: string, page_size?: number, is_active?: boolean): Promise<CustomAccountingFields>;
    createCustomAccountingField(id: string, input_type: string, name: string, is_splittable?: boolean): Promise<CustomAccountingField>;
    getCustomAccountingField(field_id: string): Promise<CustomAccountingField>;
    updateCustomAccountingField(field_option_id: string, reactivate?: boolean, value?: string): Promise<CustomAccountingField>;
    deleteCustomAccountingField(field_option_id: string): Promise<unknown>;
}
