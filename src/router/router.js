import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{path: "/sign-in", component: () => import("@/components/pages/SignInPage.vue")},
	{path: "/sign-up", component: () => import("@/components/pages/SignUpPage.vue")},
	{path: "/user/:email", name: "user", component: import("@/components/pages/UserPage.vue")}
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
