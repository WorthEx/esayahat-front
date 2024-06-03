import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/components/pages/MainPage.vue"),
  },
  {
    path: "/sign-in",
    name: "Sign in",
    component: () => import("@/components/pages/SignInPage.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: () => import("@/components/pages/SignUpPage.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import("@/components/pages/UserPage.vue"),
  },
  {
    path: "/password/reset/:resetToken/",
    name: "Change password",
    component: () => import("@/components/pages/ChangePasswordPage.vue"),
  },
  {
    path: "/chatbot",
    name: "Chatbot",
    component: () => import("@/components/pages/Chatbot.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/components/pages/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior: () => {
    return {
      top: 0,
      behavior: "smooth",
    }
  },
})

export default router
