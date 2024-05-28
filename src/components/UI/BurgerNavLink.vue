<script>
export default {
  props: {
    route: {
      required: true,
      type: String,
    }
  }
}
</script>

<template>
  <router-link
      :to="route"
      class="text-[.45rem] py-3 px-4 font-medium uppercase active:bg-black/60 w-full h-full
      hover:bg-black/30 animate-fade-down animate-once animate-duration-[600ms]">
    <span class="font-light text-white"><slot></slot></span></router-link>
</template>