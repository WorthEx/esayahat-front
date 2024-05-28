<script>
export default {
  name: "SignUpPage",
  methods: {
    async signUp(signUpData) {
      this.$store.dispatch("signUp", signUpData)
    },
  },
}
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <img
    alt="background image"
    class="absolute top-0 -z-[100] h-full w-full object-cover brightness-[90%]"
    src="@/assets/images/background-1.png" />
  <div
    class="h-full min-h-screen w-full px-5 py-3 pt-4 lg:px-24 xl:px-[8.5rem]">
    <div
      class="mx-auto flex flex-col justify-center gap-8 overflow-hidden md:flex-row">
      <div
        class="flex w-full select-none flex-col gap-2.5 rounded-[18px] bg-white px-4 pb-2 pt-2.5 text-center md:w-[80rem]">
        <span class="text-md font-bold">Регистрация</span>
        <form class="flex flex-col gap-2" method="post">
          <label class="text-start text-[12px]"
            >Уникальное имя пользователя</label
          >
          <input
            v-model="$store.state.signUpData.username"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="AceRevolutioner1991"
            type="text" />
          <label class="text-start text-[12px]">Имя</label>
          <input
            v-model="$store.state.signUpData.firstname"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="Владимир"
            type="text" />
          <label class="text-start text-[12px]">Фамилия</label>
          <input
            v-model="$store.state.signUpData.lastname"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="Ленин"
            type="text" />
          <label class="text-start text-[12px]">Электронная почта</label>
          <input
            v-model="$store.state.signUpData.email"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="our.mail@party.comm"
            type="email" />
          <label class="text-start text-[12px]"
            >Придумайте надежный пароль</label
          >
          <input
            v-model="$store.state.signUpData.password"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="*********"
            type="password" />
          <label class="text-start text-[12px]">Повторите пароль</label>
          <input
            v-model="$store.state.signUpData.passwordConfirm"
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="*********"
            type="password" />
          <button
            class="w-full rounded-[0.3rem] bg-[#4B7DDD] py-1.5 text-[12px] font-medium text-white transition-all duration-150 ease-in-out hover:drop-shadow-md active:drop-shadow-none"
            type="submit"
            @click.prevent="signUp(this.$store.state.signUpData)">
            Создать аккаунт
          </button>
          <span class="text-[12px]"
            >У вас уже есть аккаунт?&nbsp;
            <span
              class="cursor-pointer text-[#E9583B] hover:underline"
              @click="$router.push('/sign-in')"
              >Войти</span
            >
          </span>
        </form>
      </div>
      <div class="flex select-none flex-col gap-3">
        <span class="text-[33px] font-medium text-white"
          >Добро пожаловать!</span
        >
        <p class="select-none text-justify text-[14px] font-normal text-white">
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

<style scoped></style>
