import {createRouter, createWebHistory} from "vue-router";
import SignInPage from "@/components/pages/SignInPage.vue";
import SignUpPage from "@/components/pages/SignUpPage.vue";
import UserPage from "@/components/pages/UserPage.vue";
import HomePage from "@/components/pages/HomePage.vue"
import TourPage from '@/components/pages/TourPage.vue'
import ChatBotPage from '@/components/pages/ChatBotPage.vue'

const routes = [
	{path: "/", component: HomePage},
	{path: "/sign-in", component: SignInPage},
	{path: "/sign-up", component: SignUpPage},
	{path: "/user/:email", name: "user", component: UserPage},
	{path: "/tour/:id", name: 'tour', component: TourPage},
	{path: "/chatbot", name: 'chatbot', component: ChatBotPage},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
