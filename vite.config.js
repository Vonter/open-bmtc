import { resolve } from "path";
import { defineConfig } from "vite";
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  envDir: resolve(__dirname),
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [
    ViteYaml(),
  ],
});