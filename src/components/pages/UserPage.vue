<script>
import constants from "@/constants.js"
import { jwtDecode } from "jwt-decode"
import { toSignInPage } from "@/utils.js"

export default {
  name: "UserPage",
  methods: {
    async isAuthenticated() {
      if (
        localStorage.getItem(constants.accessToken) == null ||
        localStorage.getItem(constants.accessToken) === "null" ||
        localStorage.getItem(constants.accessToken) === undefined ||
        localStorage.getItem(constants.accessToken) === "undefined" ||
        localStorage.getItem(constants.accessToken) === ""
      ) {
        return false
      } else {
        const userFromToken = jwtDecode(
          localStorage.getItem(constants.accessToken),
        )
        const idFromToken = userFromToken.user_id
        return idFromToken === Number(this.$route.params.id)
      }
    },
    async logout() {
      if (await this.isAuthenticated()) {
        const response = await this.$axios
          .post("/auths/logout/", {
            refresh_token: localStorage.getItem(constants.refreshToken),
          })
          .catch((error) => {
            console.log(error)
            alert("Couldn't log out!")
          })
        if ((await response).status === 205) {
          localStorage.setItem(constants.accessToken, null)
          localStorage.setItem(constants.refreshToken, null)
          await toSignInPage()
        }
      } else await toSignInPage()
    },
    async refreshToken() {
      const response = await this.$axios
        .post("/auths/login/refresh/", {
          refresh: localStorage.getItem(constants.refreshToken),
        })
        .catch(async (error) => {
          console.log(error)
          alert("Could not refresh access token!")
          await toSignInPage()
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
      if (await this.isAuthenticated()) {
        const response = await this.$axios
          .get(`/auths/users/${this.$route.params.id}/`)
          .catch(async (error) => {
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
        } else {
          alert("Couldn't get user data!")
          await toSignInPage()
        }
      } else await toSignInPage()
    },
    async changePassword() {
      const response = await this.$axios
        .post("/auths/password/reset/", {
          email: this.userData?.email,
        })
        .catch(async (error) => {
          console.log(error)
          alert("Could not send password reset request!")
        })
      if ((await response).status === 200) {
        alert("Follow the link in your inbox to reset email.")
      } else {
        alert("Could not send password reset request!")
      }
    },
  },
  data() {
    return {
      userData: {
        id: "- None -",
        username: "- None -",
        first_name: "- None -",
        last_name: "- None -",
        email: "- None -",
      },
      modalVisible: true,
    }
  },
  async created() {
    if (await this.isAuthenticated()) await this.getUserData()
    else await toSignInPage()
  },
}
</script>

<template>
  <div
    class="absolute top-0 -z-[101] h-full w-full animate-pulse bg-slate-950"></div>
  <img
    alt=""
    class="fixed top-0 -z-[100] h-full w-full object-cover blur-[2px] brightness-[80%]"
    src="@/assets/images/background-1.png" />
  <div class="h-full min-h-[90vh] w-full py-5">
    <Container>
      <div class="flex h-full w-full flex-col items-center gap-4">
        <div
          class="grid w-full animate-fade-up select-none grid-cols-1 gap-x-8 gap-y-8 rounded-md bg-white p-6 text-black animate-delay-[300ms] animate-duration-[600ms] animate-once md:grid-cols-2 md:gap-y-16">
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
        <div class="flex w-full flex-col items-center gap-4 md:flex-row">
          <button
            class="h-fit w-full animate-fade-up rounded-md bg-white px-10 py-2 text-sm font-normal text-[#E9583B] transition-colors duration-200 animate-delay-[400ms] animate-duration-[600ms] animate-once hover:bg-[#E9583B] hover:text-white"
            @click.prevent="logout">
            Logout
          </button>
          <button
            class="h-fit w-full animate-fade-up rounded-md bg-white px-10 py-2 text-sm font-normal text-[#E9583B] transition-colors duration-200 animate-delay-[450ms] animate-duration-[600ms] animate-once hover:bg-[#E9583B] hover:text-white"
            @click.prevent="refreshToken">
            Refresh JWT
          </button>
          <button
            class="h-fit w-full animate-fade-up rounded-md bg-white px-10 py-2 text-sm font-normal text-[#E9583B] transition-colors duration-200 animate-delay-[500ms] animate-duration-[600ms] animate-once hover:bg-[#E9583B] hover:text-white"
            @click.prevent="changePassword">
            Change password
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>
