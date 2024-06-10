<script>
import NavLink from "@/components/UI/NavLink.vue"
import BurgerNavLink from "@/components/UI/BurgerNavLink.vue"
import { toChatbot } from "@/utils.js"

export default {
  name: "Navigation",
  methods: {
    toChatbot,
    async handleBurgerFindButton() {
      this.isBurgerMenuOpened = false
      await toChatbot()
    },
    switchTheme(routeName) {
      // todo Expand the list if needed
      if (["Chatbot", "Not found", "tour"].includes(routeName)) {
        this.navbarLogoUrl = new URL(
          "@/assets/images/logo-1_dark.png",
          import.meta.url,
        ).href
        this.darkNavbar = true
      } else {
        this.navbarLogoUrl = new URL(
          "@/assets/images/logo-1.png",
          import.meta.url,
        ).href
        this.darkNavbar = false
      }
    },
  },
  components: { BurgerNavLink, NavLink },
  data() {
    return {
      isBurgerMenuOpened: false,
      navbarLogoUrl: new URL("@/assets/images/logo-1.png", import.meta.url)
        .href,
      darkNavbar: false,
    }
  },
  watch: {
    $route(to, _) {
      this.switchTheme(to.name)
    },
  },
  created() {
    this.switchTheme(this.$route.name)
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
        ? 'bg-black/50 backdrop-blur-lg md:relative md:bg-transparent md:backdrop-blur-0'
        : ''
    "
    class="z-[1000] w-full select-none py-4">
    <Container>
      <div class="z-[1000] flex cursor-default items-center justify-between">
        <div
          class="flex cursor-pointer items-center gap-2"
          @click="$router.push('/')">
          <img :src="navbarLogoUrl" alt="Logo image" class="h-4 w-4" />
          <span
            :class="darkNavbar ? 'text-black' : 'text-white'"
            class="text-[0.55rem] uppercase"
            style="font-family: Audiowide, serif"
            >E-Sayahat</span
          >
        </div>
        <i
          :class="darkNavbar ? 'text-black' : 'text-white'"
          class="bi bi-list block aspect-square w-4 cursor-pointer md:hidden"
          @click="isBurgerMenuOpened = !isBurgerMenuOpened"></i>
        <nav
          :class="
            darkNavbar
              ? 'text-black [&>*]:after:bg-black'
              : 'text-white [&>*]:after:bg-white'
          "
          class="t hidden cursor-default items-center gap-4 md:flex lg:gap-6">
          <!-- todo insert valid routes -->
          <NavLink :route="'/'">Горящие туры</NavLink>
          <NavLink :route="'/'">Страны</NavLink>
          <NavLink :route="'/'">Туры</NavLink>
          <NavLink :route="'/'">Круизы</NavLink>
          <NavLink :route="'/'">О нас</NavLink>
          <button
            :class="
              darkNavbar
                ? 'bg-[#EF533F] text-white hover:bg-white hover:text-[#EF533F] hover:ring-1 hover:ring-[#EF533F]'
                : 'bg-white text-[#EF533F] hover:bg-[#EF533F] hover:text-white'
            "
            class="flex items-center justify-center rounded-sm px-3 py-1 text-[0.5rem] font-medium uppercase transition-colors duration-200"
            @click="toChatbot">
            Найти тур
          </button>
        </nav>
      </div>
    </Container>
  </div>
  <nav
    :class="
      isBurgerMenuOpened
        ? 'flex w-full bg-black/50 backdrop-blur-lg md:hidden'
        : 'hidden'
    "
    class="absolute z-[1000] h-full cursor-pointer select-none flex-col items-start transition-all duration-200 ease-in-out"
    @click="isBurgerMenuOpened = false">
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
    <button
      class="flex w-full animate-fade-down items-center justify-center bg-white py-3 text-[.5rem] font-bold uppercase text-[#E9583B] transition-colors duration-200 animate-delay-[300ms] animate-duration-[600ms] animate-once hover:bg-[#E9583B] hover:text-[white] active:bg-[#E9583B] active:text-[white]"
      @click="handleBurgerFindButton">
      Найти тур
    </button>
  </nav>
</template>
