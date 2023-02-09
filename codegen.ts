require('dotenv').config();

import { CodegenConfig } from '@graphql-codegen/cli';
import { apiConfig } from './src/configs/api.config';

const config: CodegenConfig = {
  schema: apiConfig.url,
  documents: ['src/**/*.tsx'],
  generates: {
    'src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
