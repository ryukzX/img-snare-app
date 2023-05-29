import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@css",
        replacement: fileURLToPath(new URL("./src/assets/", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components/", import.meta.url)
        ),
      },
      {
        find: "@modules",
        replacement: fileURLToPath(new URL("./server/modules/", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages/", import.meta.url)),
      },
    ],
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.js",
      output: {
        manualChunks: {
          "group-auth": [
            "./src/pages/auth/login/LoginPage.vue",
            "./src/pages/auth/signup/SignupPage.vue",
          ],
        },
      },
    },
  },
});
