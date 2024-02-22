import { ComplianceStatAPI } from "./datasources/api";
export type DataSourceContext ={
    dataSources:{
        complianceStatAPI:ComplianceStatAPI;
    },
    headers:any
}