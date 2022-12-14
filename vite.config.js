import { defineConfig } from "vite";
import { eleventyPlugin } from "vite-plugin-eleventy";

export default defineConfig({
  root: "src",
  plugins: [ eleventyPlugin() ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@styles": new URL("src/styles", import.meta.url).pathname,
      "@js": new URL("src/js", import.meta.url).pathname,
    }
  }
});
