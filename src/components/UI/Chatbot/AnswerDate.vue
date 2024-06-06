<script>
export default {
  name: "AnswerDate",
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ["selectAnswer"],
}
</script>
<template>
  <label
    :for="`date-input-${questionIndex}`"
    class="flex h-full w-fit items-center px-2 text-[.55rem] font-normal text-black sm:text-[.65rem]"
    >Выберите дату:
  </label>

  <input
    :id="`date-input-${questionIndex}`"
    :name="`${questionIndex}`"
    class="w-full rounded-[0.3rem] border border-[#ADADAD] px-2 py-1.5 text-[.55rem] font-normal focus:border-[#4285F4] sm:text-[.65rem]"
    type="date"
    @change="$emit('selectAnswer', $event.target.value)" />
</template>

<style scoped></style>
