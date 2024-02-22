import gql from 'graphql-tag';
export const typeDefs = gql `
union MixedStatTypes = ComplianceStat | ComplianceStat1

type Query {
    getStat(params:ComplianceStatQueryInput, headers:ComplianceStatHeaders) :[MixedStatTypes!]! 
  }
type ComplianceStat {
    client_code: String
    datasource: String
    market_taxonomy: String
    market: String
    hierarchy_level: String
    advertiser_id: String
    advertiser_name: String
    total_rows: String
    compliant_rows: String
    exec_time: String
    timestamp: String
    version: String
    originalId: String
    createdAt: String
    updatedAt: String
  }
  type ComplianceStat1 {
    id:String
    totalDocuments:Int
  }
  input ComplianceStatQueryInput {
    client_code: String
    datasource: String
    market_taxonomy: String
    market: String
    hierarchy_level: String
    advertiser_id: String
    advertiser_name: String
    total_rows: String
    compliant_rows: String
    exec_time: String
    timestamp: String
    version: String
  }
  input ComplianceStatHeaders{
    groupBy : String
    projection:String
  }
`

