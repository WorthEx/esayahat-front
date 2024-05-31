<script>
export default {
  props: {
    route: {
      required: true,
      type: String,
    },
    forId: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <a
      v-if="forId"
      :href="route"
      class="text-[.45rem] font-medium uppercase after:block after:h-[1px] after:mx-auto
      after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-out">
    <span class="font-light text-white"><slot></slot></span></a>
  <router-link
      v-else
      :to="route"
      class="text-[.45rem] font-medium uppercase after:block after:h-[1px] after:mx-auto
      after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-out">
    <span class="font-light text-white"><slot></slot></span></router-link>
</template>