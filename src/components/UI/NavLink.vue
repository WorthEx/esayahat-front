<script>
import { toHash, toMainPage } from "@/utils.js"

export default {
  methods: { toHash, toMainPage },
  props: {
    route: {
      required: true,
      type: String,
    },
    forId: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <span
    v-if="forId"
    @click="toHash(route)"
    class="cursor-pointer text-[.5rem] uppercase after:mx-auto after:block after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full">
    <span class="font-medium"><slot></slot></span
  ></span>
  <router-link
    v-else
    :to="route"
    class="text-[.5rem] uppercase after:mx-auto after:block after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full">
    <span class="font-medium"><slot></slot></span
  ></router-link>
</template>
