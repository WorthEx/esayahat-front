<script>
export default {
  name: "TourPage",
  computed: {
    tourID() {
      return this.$route.params.tourID
    },
  },
}
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-white"></div>
  <div class="h-full min-h-[90vh] w-full pb-8 pt-0 ring md:pt-4">
    <Container>
      <div
        class="relative flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg bg-[#E4ECF4] p-2 sm:rounded-xl sm:p-3 lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]"></div>
    </Container>
  </div>
</template>

<style scoped></style>
