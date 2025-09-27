import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@anarock/widgets": path.resolve(__dirname, "../package/src"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up (../package)
      allow: [".."],
    },
  },
});
