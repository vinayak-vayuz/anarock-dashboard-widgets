import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "Widgets",
      fileName: (format) => `index.${format}.js`,
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
  plugins: [react(), postcss({ inject: true, minimize: true })],
});
