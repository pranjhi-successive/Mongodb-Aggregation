import { Schema } from "mongoose";
import IComplianceStat from "./interface";

const complianceStatSchema: Schema<IComplianceStat> = new Schema(
  {
    client_code: { type: String, required: true },
    datasource: { type: String, required: true },
    market_taxonomy: { type: String, required: true },
    market: { type: String, required: true },
    hierarchy_level: { type: String, required: true },
    advertiser_id: { type: String, required: true },
    advertiser_name: { type: String, required: true },
    total_rows: { type: String, required: true },
    compliant_rows: { type: String, required: true },
    exec_time: { type: String, required: true },
    timestamp: { type: String, required: true },
    version: { type: String, required: true },
    originalId: { type: String, required: true },
    createdAt: { type: Date, required: true },
  },
  { timestamps: true },
);
export default complianceStatSchema;