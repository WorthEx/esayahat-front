<script>
export default {
  name: "Footer",
}
</script>

<template>
  <div
    class="flex min-h-[50vh] w-full select-none flex-col items-center justify-between bg-black py-4">
    <div
      class="grid h-full w-full grid-cols-1 place-items-center gap-4 px-5 py-8 text-[0.6rem] text-white sm:grid-cols-2 md:grid-cols-4 lg:px-24 xl:px-[8.5rem]">
      <section class="">
        <span class="font-medium uppercase tracking-wider text-white"
          >Header</span
        >
        <div class="text-normal flex flex-col gap-1">
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
        </div>
      </section>
      <section class="">
        <span class="font-medium uppercase tracking-wider text-white"
          >Header</span
        >
        <div class="text-normal flex flex-col gap-1">
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
        </div>
      </section>
      <section class="">
        <span class="font-medium uppercase tracking-wider text-white"
          >Header</span
        >
        <div class="text-normal flex flex-col gap-1">
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
          <a
            class="after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 after:ease-out hover:after:w-full"
            href="#"
            >A cool link</a
          >
        </div>
      </section>
      <section class="">
        <div
          class="text-normal flex flex-col items-center justify-center gap-1">
          <div
            class="flex cursor-pointer items-center gap-2 animate-delay-0 animate-duration-[400ms] animate-once animate-ease-out hover:animate-jump"
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
    <span class="text-[0.4rem] text-white"
      >Copyright© 2024 E-Sayahat Labs Inc.</span
    >
  </div>
</template>
