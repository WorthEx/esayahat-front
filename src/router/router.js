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
    path: "/user/:id",
    name: "User",
    component: () => import("@/components/pages/UserPage.vue"),
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
// router.beforeEach((to, from, next) => {
//   const accessToken = localStorage.getItem(constants.accessToken)
//   // if (
//   //   to.path !== "/sign-up" &&
//   //   to.path !== "/sign-in" &&
//   //   accessToken !== "null" &&
//   //   accessToken != null
//   // ) {
//   //   next()
//   // } else {
//   //   return false
//   // }
//   next()
// })

export default router
