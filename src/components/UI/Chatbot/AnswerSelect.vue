<script>
export default {
  name: "AnswerSelect",
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleEmit(event) {
      this.$emit(
        "selectAnswer",
        event.target.value,
        this.options.indexOf(event.target.value),
      )
    },
  },

  emits: ["selectAnswer"],
}
</script>

<template>
  <label
    :for="`select-${questionIndex}`"
    class="flex h-full w-fit items-center px-2 text-[.55rem] font-normal text-black sm:text-[.65rem]"
    >Выберите значение из списка:
  </label>

  <select
    :id="`select-${questionIndex}`"
    :name="`${questionIndex}`"
    autofocus
    class="w-full rounded-[0.3rem] border border-[#ADADAD] px-2 py-1.5 text-[.55rem] font-normal focus:border-[#4285F4] sm:text-[.65rem]"
    @change="handleEmit">
    <option disabled selected>Выберите значение</option>
    <option v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
</template>
