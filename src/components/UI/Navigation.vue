<script>
import NavLink from "@/components/UI/NavLink.vue"
import BurgerNavLink from "@/components/UI/BurgerNavLink.vue"

export default {
  name: "Navigation",
  components: { BurgerNavLink, NavLink },
  data() {
    return {
      isBurgerMenuOpened: false,
    }
  },
}
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    rel="stylesheet" />
  <div
    :class="
      isBurgerMenuOpened
        ? 'bg-black/40 backdrop-blur-md md:relative md:bg-transparent md:backdrop-blur-0'
        : ''
    "
    class="w-full select-none bg-transparent py-[30px]">
    <div
      class="mx-auto flex cursor-default items-center justify-between px-5 lg:px-24 xl:px-[8.5rem]">
      <div
        class="flex cursor-pointer items-center gap-2"
        @click="$router.push('/')">
        <img
          alt="Logo image"
          class="h-4 w-4"
          src="@/assets/images/logo-1.png" />
        <span
          class="text-[0.55rem] uppercase text-white"
          style="font-family: Audiowide, serif"
          >E-Sayahat</span
        >
      </div>
      <i
        class="bi bi-list block aspect-square w-4 cursor-pointer text-white md:hidden"
        @click="isBurgerMenuOpened = !isBurgerMenuOpened"></i>
      <nav class="hidden cursor-default items-center gap-6 md:flex">
        <!-- todo insert valid routes -->
        <NavLink :route="'/'">Горящие туры</NavLink>
        <NavLink :route="'/'">Страны</NavLink>
        <NavLink :route="'/'">Туры</NavLink>
        <NavLink :route="'/'">Круизы</NavLink>
        <NavLink :route="'/'">О нас</NavLink>
        <router-link
          class="flex items-center justify-center rounded-sm bg-white px-3 py-1 text-[.45rem] font-medium uppercase text-[#4B7DDD] transition-colors duration-200 hover:bg-[#4B7DDD] hover:text-white"
          to="/"
          >Найти тур
        </router-link>
      </nav>
    </div>
  </div>
  <nav
    :class="
      isBurgerMenuOpened ? 'flex w-full backdrop-blur-md md:hidden' : 'hidden'
    "
    class="absolute z-[600] h-full cursor-default flex-col items-start bg-black/40 transition-all duration-200 ease-in-out">
    <!-- todo insert valid routes -->
    <BurgerNavLink
      :route="'/'"
      class="animate-delay-[50ms]"
      @click="isBurgerMenuOpened = false"
      >Горящие туры
    </BurgerNavLink>
    <BurgerNavLink
      :route="'/'"
      class="animate-delay-[100ms]"
      @click="isBurgerMenuOpened = false"
      >Страны
    </BurgerNavLink>
    <BurgerNavLink
      :route="'/'"
      class="animate-delay-[150ms]"
      @click="isBurgerMenuOpened = false"
      >Туры
    </BurgerNavLink>
    <BurgerNavLink
      :route="'/'"
      class="animate-delay-[200ms]"
      @click="isBurgerMenuOpened = false"
      >Круизы
    </BurgerNavLink>
    <BurgerNavLink
      :route="'/'"
      class="animate-delay-[250ms]"
      @click="isBurgerMenuOpened = false"
      >О нас
    </BurgerNavLink>
    <router-link
      class="flex w-full animate-fade-down items-center justify-center bg-white px-3 py-2 text-[.45rem] font-bold uppercase text-[#E9583B] transition-colors duration-200 animate-delay-[300ms] animate-duration-[600ms] animate-once hover:bg-[#E9583B] hover:text-[white] active:bg-[#E9583B] active:text-[white]"
      to="'/'"
      @click="isBurgerMenuOpened = false"
      >Найти тур
    </router-link>
  </nav>
</template>
