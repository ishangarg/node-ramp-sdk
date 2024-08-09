

export declare type CompanyInformation = {
    active?: boolean;
    billing_address?: object;
    business_name_legal?: string;
    business_name_on_card?: string;
    created_time?: string; // Format: date-time
    enforce_sso?: boolean;
    id?: string; // Format: uuid
    initial_approved_limit?: number;
    is_integrated_with_slack?: boolean;
    is_reimbursements_enabled: boolean; // Required field
    limit_locked?: boolean;
    phone?: string;
    website?: string;
}

export declare type CompanyBalanceInformation = {
    available_card_limit?: number;
    available_flex_limit?: number;
    balance_including_pending?: number;
    card_balance_excluding_pending?: number;
    card_balance_including_pending?: number;
    card_limit?: number;
    flex_balance?: number;
    flex_limit?: number;
    float_balance_excluding_pending?: number;
    global_limit?: number;
    max_balance?: number;
    next_billing_date?: string;
    prev_billing_date?: string;
    statement_balance?: number;
}
