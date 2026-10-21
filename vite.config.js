import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  appType: "mpa",
  server: {
    host: "0.0.0.0",
    port: 4731,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        privacy: resolve("privacy.html"),
      },
    },
  },
});
