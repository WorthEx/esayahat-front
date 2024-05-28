<script>
import NavLink from "@/components/UI/NavLink.vue";
import BurgerNavLink from "@/components/UI/BurgerNavLink.vue";

export default {
  name: "Navigation",
  components: {BurgerNavLink, NavLink},
  data() {
    return {
      isBurgerMenuOpened: false
    }
  }
};
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <div :class="isBurgerMenuOpened ? 'bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-0' : ''"
       class="w-full select-none bg-transparent py-[30px]">
    <div class="flex justify-between mx-auto xl:px-[8.5rem] lg:px-24 px-5 items-center cursor-default">
      <div
          class="flex cursor-pointer gap-2 items-center"
          @click="$router.push('/')">
        <img alt="Logo image" class="w-4 h-4" src="@/assets/images/logo-1.png">
        <span class="text-white uppercase text-[0.55rem]" style="font-family: Audiowide, serif">E-Sayahat</span>
      </div>
      <i class="bi bi-list text-white w-4 aspect-square block md:hidden cursor-pointer"
         @click="isBurgerMenuOpened = !isBurgerMenuOpened"></i>
      <nav class="md:flex gap-6 items-center hidden cursor-default">
        <!-- todo insert valid routes -->
        <NavLink :route="'/'">Горящие туры</NavLink>
        <NavLink :route="'/'">Страны</NavLink>
        <NavLink :route="'/'">Туры</NavLink>
        <NavLink :route="'/'">Круизы</NavLink>
        <NavLink :route="'/'">О нас</NavLink>
        <router-link
            class="uppercase text-[.45rem] text-[#E9583B] bg-white rounded-sm flex items-center justify-center
px-3 py-1 font-bold hover:bg-[#E9583B] hover:text-white transition-colors duration-200"
            to="/">Найти тур
        </router-link>
      </nav>
    </div>
  </div>
  <nav :class="isBurgerMenuOpened ? 'flex w-full md:hidden absolute backdrop-blur-md' : 'hidden'"
       class="flex-col items-start cursor-default z-[600] transition-all duration-200 ease-in-out">
    <div class="h-screen w-screen z-[-10] cursor-pointer bg-black/40 backdrop-blur-md absolute"
         @click="isBurgerMenuOpened = false"></div>
    <!-- todo insert valid routes -->
    <BurgerNavLink :route="'/'" class="animate-delay-[50ms]" @click="isBurgerMenuOpened=false">Горящие туры
    </BurgerNavLink>
    <BurgerNavLink :route="'/'" class="animate-delay-[100ms]" @click="isBurgerMenuOpened=false">Страны</BurgerNavLink>
    <BurgerNavLink :route="'/'" class="animate-delay-[150ms]" @click="isBurgerMenuOpened=false">Туры</BurgerNavLink>
    <BurgerNavLink :route="'/'" class="animate-delay-[200ms]" @click="isBurgerMenuOpened=false">Круизы</BurgerNavLink>
    <BurgerNavLink :route="'/'" class="animate-delay-[250ms]" @click="isBurgerMenuOpened=false">О нас</BurgerNavLink>
    <router-link
        class="uppercase text-[.45rem] text-[#E9583B]  bg-white flex items-center justify-center
        px-3 py-2 font-bold hover:bg-[#E9583B] hover:text-[white] transition-colors duration-200
        active:bg-[#E9583B] active:text-[white] w-full
        animate-fade-down animate-once animate-duration-[600ms] animate-delay-[300ms]"
        to="'/'" @click="isBurgerMenuOpened=false">Найти тур
    </router-link>
  </nav>
</template>
