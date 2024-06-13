import { createRouter, createWebHistory } from "vue-router";
import BakeryService from "@/components/BakeryService.vue";
import CakeService from "@/components/CakeService.vue";
import JuiceService from "@/components/JuiceService.vue";

const routes = [
    { path: '/', component: () => import('../pages/HomePage.vue') },
    { path: '/BuyBag', component: () => import('../pages/BuyBag.vue') },
    { path: '/LogIn', component: () => import('../pages/LogIn.vue') },
    { path: '/blog/:id', component: () => import('../pages/BlogPage.vue') },
    { path: '/RegisterIn', component: () => import('../pages/RegisterIn.vue') },


    { path: "/BakeryService", component: BakeryService },
    { path: "/CakeService", component: CakeService },
    { path: "/JuiceService", component: JuiceService },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});



export default router;
