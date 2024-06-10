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
  <div
    class="w-full select-none absolute z-[3] py-5 "
    :class="$route.name == 'tour' || $route.name == 'chatbot' ? 'bg-[#1EC0CA]' : 'bg-transparent'"
  >
    <!-- <div class="flex justify-between mx-auto xl:px-[8.5rem] lg:px-24 px-5 items-center cursor-default"> -->
      <Container class="flex justify-between">
      <div
          class="flex cursor-pointer gap-2 items-center hover:translate-x-[.3rem] transition-all duration-200"
          @click="$router.push('/')">
        <img alt="Logo image" class="w-4 h-4" src="@/assets/images/logo-1.png">
        <span class="text-white uppercase text-[0.55rem]" style="font-family: Audiowide, serif">E-Sayahat</span>
      </div>
      <i class="bi bi-list text-white w-4 aspect-square block md:hidden cursor-pointer"
         @click="isBurgerMenuOpened = !isBurgerMenuOpened"></i>
      <nav class="md:flex gap-6 items-center hidden cursor-default">
        <!-- todo insert valid routes -->
        <NavLink :route="'#tours'" :forId="true">Горящие туры</NavLink>
        <NavLink :route="'#country'" :forId="true">Страны</NavLink>
        <NavLink :route="'#country'" :forId="true">Туры</NavLink>
        <NavLink :route="'/'">Круизы</NavLink>
        <NavLink :route="'/'">О нас</NavLink>
        <router-link
            class="uppercase text-[.45rem] text-[#E9583B]  bg-white rounded-sm flex items-center justify-center
px-3 py-1 font-bold hover:bg-[#E9583B] hover:text-white transition-colors duration-200"
            to="'/'">Найти тур
        </router-link>
      </nav>
    </Container>
  </div>
  <nav :class="isBurgerMenuOpened ? 'flex w-full md:hidden z-[100] absolute bg-black/30 backdrop-blur-lg' : 'hidden'"
       class="flex-col items-start cursor-default z-[1000] transition-all duration-200 ease-in-out">
    <!-- todo insert valid routes -->
    <BurgerNavLink :route="'#tours'" :forId="true" class="animate-delay-[50ms]" @click="isBurgerMenuOpened=false">Горящие туры
    </BurgerNavLink>
    <BurgerNavLink :route="'#country'" :forId="true" class="animate-delay-[100ms]" @click="isBurgerMenuOpened=false">Страны</BurgerNavLink>
    <BurgerNavLink :route="'#country'" :forId="true" class="animate-delay-[150ms]" @click="isBurgerMenuOpened=false">Туры</BurgerNavLink>
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