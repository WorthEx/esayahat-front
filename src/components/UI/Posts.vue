<script>
import Post from "@/components/UI/Post.vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Post,
  },
};
</script>

<template>
  <div v-if="posts.length > 0">
    <Post v-for="post in posts" :post="post" class=""></Post>
  </div>
  <div v-else class="mt-5 w-full text-center">
    <p class="font-bold">No posts available.</p>
  </div>
</template>

<style scoped></style>
