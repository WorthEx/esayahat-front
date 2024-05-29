<script>
import router from "@/router/router.js"
import constants from "@/constants.js"

export default {
  data() {
    return {
      signInData: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    toSignUpPage() {
      router.push("/sign-up").then((_) => window.scrollTo(0, 0))
    },
    async signIn() {
      const payload = {
        username: this.signInData.username,
        password: this.signInData.password,
      }
      const response = await this.$axios
        .post("/auths/login/", payload)
        .catch((error) => {
          console.log(error.toString())
        })
      if (response.status === 200) {
        this.clearSignInData()
        router.push("/user").then((_) => window.scrollTo(0, 0))
        localStorage.setItem(constants.accessToken, response.data.access)
        localStorage.setItem(constants.refreshToken, response.data.refresh)
      }
    },
    clearSignInData() {
      this.signInData.password = ""
      this.signInData.username = ""
    },
  },
  name: "SignInPage",
}
</script>
<template>
  <img
    alt="background image"
    class="absolute top-0 -z-[100] h-full w-full object-cover brightness-[90%]"
    src="@/assets/images/background-1.png" />
  <div class="h-full min-h-screen w-full px-5 py-3 lg:px-24 xl:px-[8.5rem]">
    <div class="mx-auto flex h-full flex-col justify-center gap-8 md:flex-row">
      <div
        class="flex w-full animate-fade-up select-none flex-col gap-2.5 overflow-hidden rounded-[18px] bg-white px-4 pb-2 pt-2.5 text-center animate-delay-300 animate-duration-[600ms] animate-once md:w-[80rem]">
        <span class="text-md font-bold">Вход</span>
        <form class="flex flex-col gap-2" method="post">
          <label class="text-start text-[12px]">Имя пользователя</label>
          <input
            v-model="signInData.username"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            type="email" />
          <label class="text-start text-[12px]">Пароль</label>
          <input
            v-model="signInData.password"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="*********"
            type="password" />
          <button
            class="w-full rounded-[0.3rem] bg-[#4B7DDD] py-1.5 text-[12px] font-medium text-white transition-all duration-150 ease-in-out hover:drop-shadow-md active:drop-shadow-none"
            type="submit"
            @click.prevent="signIn()">
            Войти
          </button>
          <span class="text-[12px]"
            >Впервые у нас?&nbsp;
            <span
              class="cursor-pointer text-[#E9583B] hover:underline"
              @click="toSignUpPage()"
              >Регистрация</span
            >
          </span>
        </form>
      </div>
      <div class="flex select-none flex-col gap-3">
        <span class="text-[33px] font-medium text-white">С возвращением!</span>
        <p class="text-justify text-[14px] font-normal text-white">
          <b class="text-[16px] font-bold">E-Sayahat</b> — Ваш проводник в мир
          незабываемых путешествий. Мы специализируемся на создании уникальных
          туров по самым интересным и захватывающим направлениям по всему миру.
          Наша команда опытных профессионалов обеспечит вам высочайший уровень
          сервиса и индивидуальный подход к каждому клиенту.
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
