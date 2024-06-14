import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'specs/main.yaml',
  output: 'src/services/main',
});