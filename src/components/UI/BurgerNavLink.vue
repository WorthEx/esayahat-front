<script>
export default {
  props: {
    route: {
      required: true,
      type: String,
    },
  },
}
</script>

<template>
  <router-link
    :to="route"
    class="w-full animate-fade-down px-4 py-3 text-[.5rem] font-medium uppercase animate-duration-[600ms] animate-once hover:bg-black/30 active:bg-black/60">
    <span class="font-light text-white"><slot></slot></span
  ></router-link>
</template>
