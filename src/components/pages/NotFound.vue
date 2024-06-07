<script>
export default {
  name: "NotFound",
}
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-white"></div>
  <div class="grid h-screen w-full place-items-center justify-items-center">
    <Container>
      <div
        class="mb-28 flex animate-fade-up select-none flex-col items-center gap-2 text-center animate-delay-[300ms] animate-duration-[600ms] animate-once">
        <span class="text-7xl font-semibold text-[#EF533F] sm:text-9xl"
          >404</span
        >
        <span class="text-xl"
          >There's no such a page. We wonder where did you get that link
          from...?</span
        >
        <router-link class="w-fit text-sm" to="/"
          ><span
            class="transition-all duration-300 ease-out after:mx-auto after:block after:h-[1.5px] after:w-0 after:bg-[#EF533F] after:transition-all after:duration-300 after:ease-out hover:text-[#EF533F] hover:after:w-full"
            >Nvm take me home</span
          ></router-link
        >
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
