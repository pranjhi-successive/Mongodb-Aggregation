import type { CodegenConfig } from '@graphql-codegen/cli'
const config: CodegenConfig = {
    schema: "./src/modules/gql/schema.ts",
    generates: {
      "./src/modules/gql/types.ts": {
        plugins: ['typescript', 'typescript-resolvers'],
        config: {
          contextType: "./context#DataSourceContext",
          mappers: {
            ComplianceStat: "./models#ComplianceStatModel",
          },
        }
      },
    },
  };
  
  export default config;