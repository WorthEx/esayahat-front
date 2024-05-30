<script>
import constants from "@/constants.js"
import router from "@/router/router.js"

export default {
  name: "UserPage",
  methods: {
    async logout() {
      const response = await this.$axios
        .post("/auths/logout/", {
          refresh_token: localStorage.getItem(constants.refreshToken),
        })
        .catch((error) => {
          console.log(error)
        })
      if ((await response).status === 205) {
        localStorage.setItem(constants.accessToken, null)
        localStorage.setItem(constants.refreshToken, null)
        await this.toSignInPage()
      }
    },
    async toSignInPage() {
      await router.push("/sign-in")
      window.scrollTo(0, 0)
    },
  },
}
</script>

<template>
  <div class="grid h-screen w-screen place-content-center bg-slate-50">
    <button
      class="rounded-full bg-slate-900 px-10 py-2 text-lg font-normal text-white"
      @click.prevent="logout">
      Logout
    </button>
  </div>
</template>
