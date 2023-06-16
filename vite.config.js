import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./server.key",
      cert: "./server.crt",
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      mode: "generateSW",
      manifest: {
        name: "MyReb | technology",
        short_name: "MyReb",
        start_url: "/",
        display: "fullscreen",
        background_color: "#212121",
        lang: "pt-br",
        scope: "/",
        icons: [ 
          {
            src: "/icons/logo-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/logo-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
        theme_color: "#212121",
      },
    }),
  ],
});
