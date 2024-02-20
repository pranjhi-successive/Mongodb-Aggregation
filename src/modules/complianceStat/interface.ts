interface IComplianceStat extends Document {
  client_code: string;
  datasource: string;
  market_taxonomy: string;
  market: string;
  hierarchy_level: string;
  advertiser_id: string;
  advertiser_name: string;
  total_rows: string;
  compliant_rows: string;
  exec_time: string;
  timestamp: string;
  version: string;
  originalId: string;
  createdAt: Date;
}
export default IComplianceStat;
