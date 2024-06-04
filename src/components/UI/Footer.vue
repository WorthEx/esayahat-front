<script>
import { toChatbot, toMainPage, toSignInPage, toSignUpPage } from "@/utils.js"

export default {
  name: "Footer",
  methods: { toChatbot, toSignUpPage, toSignInPage, toMainPage },
}
</script>

<template>
  <div class="select-none bg-black py-6">
    <Container class="flex h-full flex-col items-center justify-between gap-4">
      <div
        class="grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-12 py-5 text-[0.6rem] text-white sm:grid-cols-2 xl:grid-cols-4">
        <!-- todo insert valid routes -->
        <section class="flex h-full w-full flex-col items-center gap-2">
          <span class="font-medium uppercase tracking-widest text-white"
            >Header</span
          >
          <div class="text-normal flex flex-col gap-1 text-gray-400">
            <a
              class="w-fit cursor-pointer transition-colors duration-200 after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="toMainPage()"
              >Main page
            </a>
            <a
              class="w-fit cursor-pointer transition-colors duration-200 after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="toSignInPage()"
              >Sign in
            </a>
            <a
              class="w-fit cursor-pointer transition-colors duration-200 after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="toSignUpPage()"
              >Sign up
            </a>
            <a
              class="w-fit cursor-pointer transition-colors duration-200 after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="toChatbot"
              >Chatbot
            </a>
          </div>
        </section>
        <section class="flex h-full w-full flex-col items-center gap-2">
          <span class="font-medium uppercase tracking-widest text-white"
            >Header</span
          >
          <div class="text-normal flex flex-col gap-1 text-gray-400">
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
          </div>
        </section>
        <section class="flex h-full w-full flex-col items-center gap-2">
          <span class="font-medium uppercase tracking-widest text-white"
            >Header</span
          >
          <div class="text-normal flex flex-col gap-1 text-gray-400">
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
            <a
              class="w-fit cursor-pointer transition-colors after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:text-white hover:after:w-full"
              @click="this.$router.push('/')"
              >A cool link
            </a>
          </div>
        </section>
        <section class="h-full w-full">
          <div
            class="text-normal flex h-full w-full flex-col items-center justify-center gap-1">
            <div
              class="flex cursor-pointer flex-row items-center gap-1.5 transition-all duration-100 ease-in-out hover:gap-3 sm:flex-col"
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
          </div>
        </section>
      </div>
      <span class="text-[.6rem] text-white"
        >Copyright © 2024 E-Sayahat Inc.</span
      >
    </Container>
  </div>
</template>
