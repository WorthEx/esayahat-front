import { createRouter, createWebHistory } from "vue-router"

const routes = [
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
    path: "/user",
    name: "User",
    component: import("@/components/pages/UserPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
router.beforeEach((to, from, next) => {
  // const accessToken = localStorage.getItem(constants.accessToken)
  // if (
  //   from.path === "/sign-in" &&
  //   accessToken == null &&
  //   to.path !== "/sign-up"
  // ) {
  //   return false
  // }
  next()
})

export default router
