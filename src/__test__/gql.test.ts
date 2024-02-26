import { typeDefs } from "../modules/gql/schema";
import { resolvers } from "../modules/gql/resolver";
import { getTestServer } from "../modules/gql";
import { ApolloServer } from "@apollo/server";
import http from 'http';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { ComplianceStatAPI } from "../modules/gql/datasources/api";

describe("GraphQL API Tests", () => {
  let app : any ;
  beforeAll(async () => {
    app = express();
    const httpServer = http.createServer(app);
    const apolloTestServer = getTestServer(httpServer);

    await apolloTestServer.start();
    app.use(
      express.json({ limit: "50mb" }),
      expressMiddleware(apolloTestServer, {
        context: async ({ req }) => {
          return {
            headers: req.headers,
            dataSources: {
              complianceStatAPI: new ComplianceStatAPI(),
            },
          };
        },
      }),
    );
  });
  test("should fetch stats", async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const response = await testServer.executeOperation({
      query: `
      query {
        getStat() {
          ... on ComplianceStat1 {
            id
            totalDocuments
          }
        }
      }
    `,
      variables: { params: { client_code: "A_WGS" } },
    });
    console.log((response.body as any).singleResult.error);

    const expectedData = {
      data: {
        getStat: {
          id: null,
          totalDocuments: 20228,
        },
      },
    };

    // (graphql as jest.Mock).mockResolvedValue(expectedData);

    // const result = await graphql(query);
    // expect(result).toEqual(expectedData);
  });
  // test("should handle errors", async () => {
  //   const query: any = `
  //     query {
  //       getStat(params: { client_code: "A_WGS" }) {
  //         ... on ComplianceStat1 {
  //           id
  //           totalDocuments
  //         }
  //       }
  //     }
  //   `;

  //   const error = new Error("Internal Server Error");
  //   (graphql as jest.Mock).mockRejectedValue(error);

  //   await expect(graphql(query)).rejects.toThrow("Internal Server Error");
  // });

  // test("should fetch stats", async () => {

  //   const query: any = `
  //   query {
  //     getStat(params: { client_code: "A_WGS" }) {
  //       ... on ComplianceStat1 {
  //         id
  //         totalDocuments
  //       }
  //     }
  //   }
  // `;
  // await request('http://localhost:4040/aggregate/stat?client_code="A_WGS"', query)
  // })
});
