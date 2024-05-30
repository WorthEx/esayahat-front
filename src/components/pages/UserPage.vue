<script>
import constants from "@/constants.js"
import router from "@/router/router.js"

export default {
  name: "UserPage",
  methods: {
    async logout() {
      if (
        localStorage.getItem(constants.accessToken) == null ||
        localStorage.getItem(constants.accessToken) === "null" ||
        localStorage.getItem(constants.accessToken) === undefined ||
        localStorage.getItem(constants.accessToken) === "undefined"
      ) {
        await this.toSignInPage()
        return
      }
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
    },
    async refreshToken() {
      const response = await this.$axios
        .post("/auths/login/refresh/", {
          refresh: localStorage.getItem(constants.refreshToken),
        })
        .catch((error) => {
          console.log(error)
        })
      if ((await response).status === 200 || (await response).status === 201) {
        localStorage.setItem(constants.accessToken, response.data.access)
        localStorage.setItem(constants.refreshToken, response.data.refresh)
        alert("Tokens were updated!")
      } else {
        alert("Provided refresh token is expired!")
        await this.logout()
      }
    },
    async getUserData() {
      const response = await this.$axios
        .get(`/auths/users/${this.$route.params.id}/`)
        .catch((error) => {
          console.log(error)
        })
      if ((await response).status === 200) {
        this.userData = {
          id: response.data.id,
          username: response.data.username,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
        }
        console.log(this.userData)
      } else {
        alert("Couldn't get user data!")
        await this.logout()
      }
    },
  },
  data() {
    return {
      userData: {
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        email: "",
      },
    }
  },
  async created() {
    await this.getUserData()
  },
}
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-slate-900"></div>
  <div class="grid h-full min-h-[90vh] w-full place-items-center py-5">
    <Container>
      <div class="flex h-full w-full flex-col items-center gap-4">
        <div
          class="grid w-full select-none grid-cols-1 gap-x-8 gap-y-16 rounded-lg bg-sky-900 p-8 text-white md:grid-cols-2">
          <div class="flex flex-col gap-1">
            <span class="text-[.8rem] uppercase tracking-wider">Username</span>
            <span class="text-[.7rem]">{{ userData.username }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[.8rem] uppercase tracking-wider">Email</span>
            <span class="text-[.7rem]">{{ userData.email }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[.8rem] uppercase tracking-wider">Firstname</span>
            <span class="text-[.7rem]">{{ userData.first_name }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[.8rem] uppercase tracking-wider">Lastname</span>
            <span class="text-[.7rem]">{{ userData.last_name }}</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-4 md:flex-row">
          <button
            class="h-fit w-fit rounded-full bg-sky-700 px-10 py-2 text-sm font-normal text-white transition-colors duration-200 hover:bg-sky-900"
            @click.prevent="logout">
            Logout
          </button>
          <button
            class="h-fit w-fit rounded-full bg-sky-700 px-10 py-2 text-sm font-normal text-white transition-colors duration-200 hover:bg-sky-900"
            @click.prevent="refreshToken">
            Refresh JWT
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>
