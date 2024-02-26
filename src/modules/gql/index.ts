import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { ComplianceStatAPI } from "./datasources/api";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
export async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const headers = req.headers;
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


export function getTestServer(httpServer:any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }
  );

  return server;
}


startApolloServer();
