
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
    schema: [
    {
      'https://graph.mintbase.xyz': {
        headers: {
          'mb-api-key' : 'anon'
        }
      },
    }
  ],
  documents: "src/data/queries/feed.graphl.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
