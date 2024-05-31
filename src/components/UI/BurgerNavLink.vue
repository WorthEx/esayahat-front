<script>
export default {
  props: {
    route: {
      required: true,
      type: String,
    },
    forId: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <a
      v-if="forId"
      :href="route"
      class="text-[.45rem] py-3 px-4 font-medium uppercase active:bg-white/20 w-full h-full
      hover:bg-black/30  active:backdrop-blur-lg animate-fade-down animate-once animate-duration-[600ms]">
    <span class="font-light text-white"><slot></slot></span></a>
  <router-link
      v-else
      :to="route"
      class="text-[.45rem] py-3 px-4 font-medium uppercase active:bg-white/20 w-full h-full
      hover:bg-black/30  active:backdrop-blur-lg animate-fade-down animate-once animate-duration-[600ms]">
    <span class="font-light text-white"><slot></slot></span></router-link>
</template>