import { Base } from "src/base";
import { FieldOption, Uploaded, CustomFieldOption, CustomFieldOptions, CustomAccountingField, CustomAccountingFields, AccountingConnection } from "./types";
import { LedgerAccount, LedgerAccounts, GLAccounts, GLAccount } from "./types";
import { ACCOUNTING_CAF_INPUT_BOOLEAN, ACCOUNTING_CAF_INPUT_FREEFORM, ACCOUNTING_CAF_INPUT_SINGLE_CHOICE } from "src/constants";
import {v4 as uuidv4} from 'uuid';
import { createUrlParameters } from "src/utils";



/**
 * 
 * The accounting API class unififies all API calls that require oAuth Scope - accounting:read, accounting:write
 * 
 */
export class AccountingAPI extends Base{

    //Custom Accounting Options

    getAccountingOptions(fieldId: string, start?:string, pageSize?:number, isActive?: boolean): Promise<CustomFieldOptions>{
        const params = {
            'field_id': fieldId,
            'page_size': pageSize,
            'start':start,
            'is_active': isActive
        }

        const urlParams = createUrlParameters(params)
        return this.invoke('accounting/field-options?'+urlParams)
    }

    postNewAccountingFieldOptions(fieldOptions: FieldOption[]): Promise<Uploaded>{
        const fieldId = uuidv4()
        const params = {
            'field_id': fieldId,
            'options': fieldOptions
        }
        const requestInit: RequestInit = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.invoke('accounting/field-options', requestInit)
    }

    getCustomAccountingOption(field_option_id:string):Promise<CustomFieldOption>{
        return this.invoke(`accounting/field-options/${field_option_id}`)
    }

    updateCustomAccountingOption(field_option_id: string, reactivate?:boolean, value?:string):Promise<CustomFieldOption>{
        const params = {
            'reactivate':reactivate,
            'value':value
        }
        const requestInit: RequestInit = {
            method: 'PATCH',
            body: JSON.stringify(params)
        };
        return this.invoke(`accounting/field-options/${field_option_id}`, requestInit)
    }

    deleteCustomAccountingFieldOption(field_option_id: string){
        const requestInit: RequestInit = {
            method: 'DELETE'
        }

        return this.invoke(`accounting/field-options/${field_option_id}`)
    }

    //Custom Accounting Field

    listCustomAccountingFields(start?:string, page_size?:number, is_active?:boolean):Promise<CustomAccountingFields>{
        const params = {
            start: start,
            page_size:  page_size,
            is_active: is_active
        }
        const urlParams = createUrlParameters(params)
        return this.invoke(`accounting/fields?${urlParams}`)
    }

    createCustomAccountingField(id: string, input_type: string, name: string, is_splittable?: boolean): Promise<CustomAccountingField>{
        if (input_type !== ACCOUNTING_CAF_INPUT_BOOLEAN || input_type !== ACCOUNTING_CAF_INPUT_FREEFORM || input_type !== ACCOUNTING_CAF_INPUT_SINGLE_CHOICE){
            throw new Error('The input type can only be SINGLE_CHOICE, BOOLEAN or FREE_FORM_TEXT.')
        }
        const params = {
            id: id, 
            input_type:input_type,
            name: name,
            is_splittable: is_splittable
        }
        const requestInit: RequestInit = {
            method: 'POST',
            body: JSON.stringify(params)
        }

        return this.invoke('accounting/fields', requestInit)
    }

    getCustomAccountingField(field_id: string):Promise<CustomAccountingField>{
        return this.invoke(`accounting/fields/${field_id}`)
    }

    updateCustomAccountingField(field_option_id: string, reactivate?:boolean, value?: string):Promise<CustomAccountingField>{
        const params = {
            reactivate: reactivate,
            value: value
        }

        const requestInit: RequestInit = {
            method: "PATCH",
            body: JSON.stringify(params)
        }
        return this.invoke(`accounting/fields/${field_option_id}`)
    }

    deleteCustomAccountingField(field_option_id:string){
        const requestInit: RequestInit = {
            method: 'DELETE'
        }
        return this.invoke(`accounting/fields/${field_option_id}`, requestInit)
    }

    //Accounting Connections

    getAccountingConnection():Promise<AccountingConnection>{
        return this.invoke('accounting/connection')
    }

    registerNewAccountingConnection(remote_provider_name: string, reactivate?:boolean):Promise<AccountingConnection>{
        const params = {
            reactivate: reactivate,
            remote_provider_name: remote_provider_name
        }
        const requestInit: RequestInit = {
            method: 'POST'
        }

        return this.invoke('accounting/connection', requestInit)
    }

    deleteAccountingConnection(){
        const requestInit: RequestInit = {
            method: 'DELETE'
        }
        return this.invoke('accounting/connection', requestInit)
    }

    //Ledger Accounts
    getGeneralLedgerAccounts(start?: string, page_size?:number, is_active?:boolean, is_synced?:boolean):Promise<LedgerAccounts>{
        return this.invoke('accounting/accounts')
    }

    addGeneralLedgerAccounts(gl_accounts: GLAccounts[]):Promise<Uploaded>{
        const params = {
            gl_accounts: gl_accounts
        }
        const requestInit: RequestInit = {
            method: 'POST',
            body: JSON.stringify(params)
        }
        return this.invoke('accounting/accounts', requestInit)
    }

    getGeneralAccountLedger(gl_account_id:string):Promise<GLAccount>{
        return this.invoke(`accounting/accounts/${gl_account_id}`)
    }

    updateGeneralAccountLedger(gl_account_id: string, code?:string, name?:string, reactivate?:boolean, subsidiaries?:string[]):Promise<GLAccount>{
        const params = {
            code: code,
            name: name,
            reactivate:reactivate, 
            subsidiaries: subsidiaries
        }
        const requestInit: RequestInit = {
            method: 'PATCH',
            body: JSON.stringify(params)
        }
        return this.invoke(`accounting/accounts/${gl_account_id}`, requestInit)
    }

    deleteGeneralLedgerAccount(gl_account_id: string){
        const requestInit: RequestInit = {
            method: 'DELETE'
        }
        return this.invoke(`accounting/accounts/${gl_account_id}`, requestInit)
    }



}