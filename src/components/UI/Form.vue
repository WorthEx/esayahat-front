<script>
import CoolButton from "@/components/UI/CoolButton.vue";

export default {
  components: { CoolButton },
  data() {
    return {
      post: {
        text: "",
      },
    };
  },
  methods: {
    createPost() {
      if (this.post.text.length > 0) {
        this.$emit("addPost", this.post);
        this.post = {
          text: "",
        };
      }
    },
    deletePosts() {
      this.$emit("deletePosts");
    },
  },
};
</script>

<template>
  <form class="rounded-lg p-7 ring ring-amber-400" @submit.prevent>
    <div class="flex flex-col">
      <label for="post-text">Insert post text:</label>
      <textarea
        id="post-text"
        v-model.trim="post.text"
        class="mt-1 h-28 w-full resize-none rounded-sm p-2 ring ring-amber-400"
        type="text"></textarea>
      <div class="mt-2 flex gap-1">
        <CoolButton :alert="false" @click="createPost">Add post</CoolButton>
        <CoolButton :alert="true" @click="deletePosts">Delete posts</CoolButton>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
