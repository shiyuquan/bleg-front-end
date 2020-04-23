import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/home/Home.vue";
import HelloWorld from "@/components/helloWorld/HelloWorld.vue";
import Other from '@/components/other/other.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: "/other",
        name: "Other",
        component: Other
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
        import(/* webpackChunkName: "about" */ "../components/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
