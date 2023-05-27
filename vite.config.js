import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
