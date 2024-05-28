import {createRouter, createWebHistory} from "vue-router";
import SignInPage from "@/components/pages/SignInPage.vue";
import SignUpPage from "@/components/pages/SignUpPage.vue";
import UserPage from "@/components/pages/UserPage.vue";

const routes = [
	{path: "/sign-in", component: SignInPage},
	{path: "/sign-up", component: SignUpPage},
	{path: "/user/:email", name: "user", component: UserPage},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
