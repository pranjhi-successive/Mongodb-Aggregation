import { Schema } from "mongoose";
import IComplianceError from "./interface";

const complianceErrorSchema: Schema<IComplianceError> = new Schema({
    client_code: { type: String },
    datasource: { type: String  },
    market_taxonomy: { type: String  },
    market: { type: String  },
    hierarchy_level: { type: String  },
    advertiser_id: { type: String  },
    advertiser_name: { type: String  },
    row_id: { type: String  },
    row_data: { type: String  },
    structural_error: { type: Boolean  },
    field_error: { type: Boolean  },
    reg_exp_error: { type: Boolean  },
    list_rule_error: { type: Boolean  },
    min_length_error: { type: Boolean  },
    max_length_error: { type: Boolean  },
    dependent_field_error: { type: Boolean  },
    taxonomy_pattern_id: { type: String  },
    error_age_days: { type: Number  },
    taxonomy_field_name: { type: String  },
    taxonomy_field_value: { type: String  },
    error_text: { type: String  },
    error_json: { type: String  },
    timestamp: { type: Date  },
    location: { type: String  },
    version: { type: String  },
    originalId: { type: String  },
    createdAt: { type: Date  },
}, { timestamps: true });
export default complianceErrorSchema;