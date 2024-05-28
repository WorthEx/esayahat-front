<template>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect"/>
  <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">

  <div id="app" class="min-h-[50%] relative">
    <Navigation/>
    <div class="mx-auto">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/UI/Navigation.vue"
import {useStore} from "@/stores/store.js"

export default {
  components: {Navigation},
  data() {
    return {
      store: useStore(),
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = 'E-Sayahat';
      }
    },
  }
}
</script>

<style>
</style>
