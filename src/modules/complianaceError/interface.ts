import IBase from "../../lib/base/interface";

interface IComplianceError extends IBase {
    client_code: string;
    datasource: string;
    market_taxonomy: string;
    market: string;
    hierarchy_level: string;
    advertiser_id: string;
    advertiser_name: string;
    row_id: string;
    row_data: string;
    structural_error: boolean;
    field_error: boolean;
    reg_exp_error: boolean;
    list_rule_error: boolean;
    min_length_error: boolean;
    max_length_error: boolean;
    dependent_field_error: boolean;
    taxonomy_pattern_id: string;
    error_age_days: number;
    taxonomy_field_name: string;
    taxonomy_field_value: string;
    error_text: string;
    error_json: string;
    timestamp: Date;
    location: string;
    version: string;
    originalId: string;
    createdAt: Date;
}
export default IComplianceError;