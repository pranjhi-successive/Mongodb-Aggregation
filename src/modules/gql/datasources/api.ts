import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { ComplianceStatModel, ComplianceStatModel1 } from "../models";
export class ComplianceStatAPI extends RESTDataSource {
  baseURL: string = "http://localhost:4040/aggregate/";

  async getStat(filters: any): Promise<ComplianceStatModel[] | ComplianceStatModel1[]> {
    const url: string = `stat`;
    return this.get(url, {
      params: {
        ...filters,
      },
    });
  }
   override willSendRequest(_path: string, request: AugmentedRequest) {
    console.log(_path);
    console.log(request);
    request.headers["groupBy"] = '{"_id":null,"totalDocuments":{"$sum":1}}';
    console.log("request-final =", request);
  }
}
