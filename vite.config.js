import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Use NODE_ENV or a custom flag to switch between library build and playground
const isPlayground = false;

export default defineConfig({
  plugins: [react()],
  root: isPlayground ? path.resolve(__dirname, "src/playground") : undefined,
  build: isPlayground
    ? false
    : {
        lib: {
          entry: path.resolve(__dirname, "src/index.js"), // library entry
          name: "Widgets",
          fileName: (format) => `index.${format}.js`,
          formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
  resolve: {
    alias: {
      "@widgets": path.resolve(__dirname, "src/widgets"), // optional, use in playground
    },
  },
});
