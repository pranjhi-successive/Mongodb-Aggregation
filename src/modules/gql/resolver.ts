import { Resolvers } from "./types";
export const resolvers:Resolvers={
    Query:{
        getStat: async (_, { params }, { dataSources,headers })=>{
            const filter: any = {};
            const headerfilter:any ={};
            Object.entries(params as any).forEach(([key, value]) => {
                filter[key] = `"${value}"`;
            })
            console.log(filter)
            Object.entries(headers as any).forEach(([key, value]) => {
                headerfilter[key] = `"${value}"`;
            })

            console.log('header in resolvers =', headers);

            const result : any= await dataSources.complianceStatAPI.getStat(filter);
            console.log(result.data);
            return result.data;

        }
    },
    MixedStatTypes: {
        __resolveType(obj:any) {
            console.log("objjjj",obj)

            if (obj.client_code) {
                console.log('Returning Compli-Stat');
                return 'ComplianceStat';
            }
            if (obj.hasOwnProperty('_id')) {
                console.log('Returning Compli-Stat-1');
                return 'ComplianceStat1';
            }
            return null;
        },
      },
}
