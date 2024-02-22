import mongoose from "mongoose";
import IComplianceError from "./interface";
import complianceErrorSchema from "./schema";

// const errorModel = mongoose.model<IComplianceError>('ComplianceError', complianceErrorSchema);
const errorModel = mongoose.model<IComplianceError>('ComplianceError', complianceErrorSchema, 'ComplianceError');

export default errorModel;
