<script>
export default {
  name: "NotFound",
}
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-white"></div>
  <div class="grid h-screen w-full place-items-center">
    <Container>
      <div
        class="mb-28 flex animate-fade-up select-none flex-col gap-2 text-center animate-delay-[300ms] animate-duration-[600ms] animate-once">
        <span class="text-7xl text-[#EF533F] sm:text-9xl">404</span>
        <span class="text-xl"
          >There's no such a page. We wonder where did you get that link
          from...?</span
        >
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
