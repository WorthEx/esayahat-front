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
    class="text-[.5rem] uppercase after:mx-auto after:block after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full">
    <span class="font-medium"><slot></slot></span
  ></router-link>
</template>
