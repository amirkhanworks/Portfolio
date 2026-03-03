import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// For GitHub Pages: set base to your repo name, e.g. base: "/Amir/"
// So the site works at https://username.github.io/Amir/
const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
