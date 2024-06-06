<script xmlns="http://www.w3.org/1999/html">
export default {
  name: "ChatbotQuestion",
  props: {
    question1: {
      required: true,
      type: String,
    },
    question2: {
      required: false,
      type: String,
    },
    selectedContent: {
      default: null,
    },
  },
}
</script>

<template>
  <div class="flex flex-col gap-y-4 text-[.55em] font-normal sm:text-[.7em]">
    <div
      :class="question2 ? 'grid-rows-2' : 'grid-rows-1'"
      class="animate-duration-600 grid animate-fade-up grid-cols-[1.75rem_auto] gap-x-2 gap-y-2.5 pr-10 animate-delay-300 animate-once animate-ease-out sm:gap-x-3.5">
      <div class="h-7 w-7 overflow-hidden rounded-full bg-white">
        <img
          alt="Консультант"
          class="mt-0.5 h-full w-full scale-125"
          src="../../../assets/images/woman_icon.png" />
      </div>
      <div
        class="col-start-2 w-fit rounded-r-2xl rounded-bl-2xl rounded-tl-md bg-white px-3 py-2.5 text-black">
        {{ question1 }}
      </div>
      <div
        v-if="question2"
        class="col-start-2 w-fit rounded-r-2xl rounded-bl-2xl rounded-tl-md bg-white px-3 py-2.5 text-black">
        {{ question2 }}
      </div>
    </div>
    <div
      class="animate-duration-600 flex w-full animate-fade-up flex-row items-center justify-end gap-x-2 animate-delay-500 animate-once animate-ease-out sm:gap-x-3.5">
      <div
        class="w-fit rounded-l-2xl rounded-br-2xl rounded-tr-md bg-white px-3 py-2.5 text-start text-black">
        <div
          v-if="selectedContent == null || selectedContent.length === 0"
          class="flex flex-row">
          <span
            class="animate-bounce animate-delay-100 animate-duration-1000 animate-infinite animate-ease-out"
            >.</span
          ><span
            class="animate-bounce animate-delay-150 animate-duration-1000 animate-infinite animate-ease-out"
            >.</span
          ><span
            class="animate-bounce animate-delay-200 animate-duration-1000 animate-infinite animate-ease-out"
            >.</span
          >
        </div>
        <div v-else-if="Array.isArray(selectedContent)">
          <ol class="list-inside list-disc">
            <li v-for="(content, index) in selectedContent" :key="index">
              {{ content }}
            </li>
          </ol>
        </div>
        <span v-else>{{ selectedContent }}</span>
      </div>
      <div class="h-7 w-7 overflow-hidden rounded-full bg-white">
        <img
          alt="Клиент"
          class="mt-1 h-full w-full"
          src="../../../assets/images/man_icon.png" />
      </div>
    </div>
  </div>
</template>
