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
      class="text-[.45rem] font-medium uppercase after:block after:h-[1px] after:mx-auto
      after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-out">
    <span class="font-light text-white"><slot></slot></span></router-link>
</template>