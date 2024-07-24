/** @type {import('vite').UserConfig} */
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  assetsInclude: ["public/*.svg"],
  build: {
    emptyOutDir: false,
    cssCodeSplit: false,
    // rollupOptions: {
    //   output: {
    //     assetFileNames: "assets/[name]-[hash][extname]",
    //     chunkFileNames: "assets/[name]-[hash].js",
    //     entryFileNames: "assets/[name]-[hash].js",
    //   },
    // },
  },
} satisfies UserConfig);
