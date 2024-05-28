<template>
  <button :class="color" class="flex-1 rounded-md p-1 text-white transition">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "CoolButton",
  props: {
    alert: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    color() {
      return {
        "bg-red-600 hover:bg-red-400": this.alert,
        "bg-green-600 hover:bg-green-400": !this.alert,
      };
    },
  },
};
</script>
