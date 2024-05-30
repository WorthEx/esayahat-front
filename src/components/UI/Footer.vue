<script>
export default {
  name: "Footer",
}
</script>

<template>
  <div
    class="flex min-h-[60vh] w-full select-none flex-col items-center justify-between gap-4 bg-black pb-4 pt-8">
    <div
      class="grid h-full w-full max-w-lg grid-cols-1 place-items-center gap-x-4 gap-y-12 px-5 py-5 text-[0.6rem] text-white md:grid-cols-2 lg:max-w-xl lg:px-0 xl:max-w-2xl xl:grid-cols-4 2xl:max-w-3xl">
      <section class="flex h-full flex-col gap-2">
        <span class="font-medium uppercase tracking-widest text-white"
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
      <section class="flex h-full flex-col gap-2">
        <span class="font-medium uppercase tracking-widest text-white"
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
      <section class="flex h-full flex-col gap-2">
        <span class="font-medium uppercase tracking-widest text-white"
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
      <section class="h-full">
        <div
          class="text-normal flex h-full w-full flex-col items-center justify-center gap-1">
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
    <span class="text-[.6rem] text-white"
      >Copyright © 2024 E-Sayahat Inc.</span
    >
  </div>
</template>
