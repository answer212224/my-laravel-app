import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由配置
import vuetify from "./plugins/vuetify"; // 引入 Vuetify 配置

createApp(App)
    .use(router) // 使用路由
    .use(vuetify) // 使用 Vuetify
    .mount("#app");
