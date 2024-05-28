<script>
import {useStore} from "@/stores/store.js";

export default {
  data() {
    return {
      store: useStore()
    };
  },
  name: "SignInPage"
};
</script>
<template>
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
  <img alt="background image" class="object-cover h-full w-full absolute top-0 -z-[100]"
       src="@/assets/images/background-1.png"/>
  <div class="h-full w-full min-h-screen ring ring-red-500 xl:px-[8.5rem] lg:px-24 px-5 pt-7">
    <div class="flex flex-row gap-8">
      <div class="w-60 rounded-lg px-4 pt-2.5 pb-2 gap-2 flex-col flex bg-white text-center">
        <span class="font-bold text-md">Вход</span>
        <form class="flex flex-col gap-2" method="post">
          <label class="text-[12px] text-start">Почта или номер телефона</label>
          <input class="w-full text-[14px] rounded-[0.3rem] ring-[#ADADAD] ring-[1px] px-2 py-1.5" type="text">
          <label class="text-[12px] text-start">Пароль</label>
          <input class="w-full text-[14px] rounded-[0.3rem] ring-[#ADADAD] ring-[1px] px-2 py-1.5" type="password">
          <button class="bg-[#4B7DDD] w-full py-2 text-white rounded-md text-[12px] drop-shadow-md" type="submit"
                  @submit.prevent="">Войти
          </button>
          <span class="text-[12px]">Впервые у нас?&nbsp;
          <span class="text-[#E9583B] cursor-pointer" @click="$router.push('/sign-up')">Регистрация</span>
        </span>
        </form>
      </div>
      <div class="flex flex-col gap-4">
        <span class="font-medium text-[33px] text-white">С возвращением!</span>
        <p class="font-normal text-[14px] text-white">STUAIR – Ваш проводник в мир незабываемых путешествий. Мы
          <br>специализируемся на создании уникальных туров по самым интересным<br>и захватывающим направлениям по всему
          миру.
          Наша команда опытных
          <br>
          профессионалов обеспечит вам высочайший уровень сервиса и
          <br>индивидуальный подход к каждому клиенту.</p>
      </div>
    </div>
  </div>
</template>

<style></style>
