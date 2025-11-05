import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/umami-elegance/",     // <-- importante per GitHub Pages
  build: {
    outDir: "docs"              // build va in /docs così GitHub Pages può servire da main/docs
  }
});
