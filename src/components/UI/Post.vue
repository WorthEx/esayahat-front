<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="mt-5 h-fit w-fit select-none rounded-lg p-3 ring ring-blue-500">
    <span><span class="font-bold">Text:</span> {{ post.text }}</span>
  </div>
</template>
