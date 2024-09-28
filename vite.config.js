import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
        vuetify({ autoImport: true }), // 確保這裡正確配置了
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
