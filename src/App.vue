<template>
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
    rel="stylesheet" />

  <div id="app" class="relative min-h-[50%]">
    <Navigation />
    <div class="mx-auto">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/UI/Navigation.vue"
import Footer from "@/components/UI/Footer.vue"

export default {
  components: { Navigation, Footer },
  async mounted() {},
  watch: {
    $route: {
      immediate: true,
      handler(_) {
        document.title = "E-Sayahat"
      },
    },
  },
}
</script>

<style></style>
