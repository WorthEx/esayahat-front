<script>
export default {
  data() {
    return {}
  },
  name: "SignInPage",
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
  <div class="h-full min-h-screen w-full px-5 py-3 lg:px-24 xl:px-[8.5rem]">
    <div
      class="mx-auto flex flex-col justify-center gap-8 overflow-hidden md:flex-row">
      <div
        class="flex w-full select-none flex-col gap-2.5 rounded-[18px] bg-white px-4 pb-2 pt-2.5 text-center md:w-[80rem]">
        <span class="text-md font-bold">Вход</span>
        <form class="flex flex-col gap-2" method="post">
          <label class="text-start text-[12px]">Электронная почта</label>
          <input
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            type="email" />
          <label class="text-start text-[12px]">Пароль</label>
          <input
            class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
            placeholder="*********"
            type="password" />
          <button
            class="w-full rounded-[0.3rem] bg-[#4B7DDD] py-1.5 text-[12px] font-medium text-white transition-all duration-150 ease-in-out hover:drop-shadow-md active:drop-shadow-none"
            type="submit"
            @submit.prevent="">
            Войти
          </button>
          <span class="text-[12px]"
            >Впервые у нас?&nbsp;
            <span
              class="cursor-pointer text-[#E9583B] hover:underline"
              @click="$router.push('/sign-up')"
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
