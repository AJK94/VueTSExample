import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/",
        name: "Home",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/cats",
        name: "Cats",
        component: () => import("./views/Cats.vue"),
    },
    {
        path: "/cat/:breed",
        name: "Cat",
        component: () => import("./views/Cat.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;