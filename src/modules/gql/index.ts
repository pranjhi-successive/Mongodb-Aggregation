import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { ComplianceStatAPI } from "./datasources/api";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      // Access request headers here
      const headers = req.headers;
      // Return an object with headers and any other context properties you need
      return {
        headers,
        dataSources: {
          complianceStatAPI: new ComplianceStatAPI(),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
