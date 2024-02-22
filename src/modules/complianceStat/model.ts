import mongoose from "mongoose";
import IComplianceStat from "./interface";
import complianceStatSchema from "./schema";

export const statModel = mongoose.model<IComplianceStat>('ComplianceStat', complianceStatSchema,'ComplianceStat');