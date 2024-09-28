import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; // 引入 Home 組件
import About from "./views/About.vue"; // 引入 About 組件

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
