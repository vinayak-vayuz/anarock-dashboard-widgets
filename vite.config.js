import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Use NODE_ENV or a custom flag to switch between library build and playground
const isPlayground = true;

export default defineConfig({
  plugins: [react()],
  root: isPlayground ? path.resolve(__dirname, "src/playground") : undefined, // use playground root in dev
  build: isPlayground
    ? {
        outDir: "../../dist-playground", // playground build folder
        rollupOptions: {
          input: path.resolve(__dirname, "src/playground/main.jsx"),
        },
      }
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
