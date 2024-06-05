<script>
export default {
  name: "AnswerRadio",
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
    value: {
      required: true,
    },
    optionIndex: {
      required: true,
    },
  },
  data() {
    return {}
  },
  emits: ["selectAnswer"],
}
</script>
<!--<template>-->
<!--  <input-->
<!--    :id="`${optionIndex}`"-->
<!--    :class="`peer/${optionIndex}`"-->
<!--    :name="`${questionIndex}`"-->
<!--    :value="value"-->
<!--    class="hidden"-->
<!--    type="radio"-->
<!--    @change="$emit('selectAnswer', value)" />-->
<!--  <label-->
<!--    :class="`peer-hover/${optionIndex}:bg-black`"-->
<!--    :for="`${optionIndex}`"-->
<!--    class="h-full w-full rounded-sm bg-[#EEEEEE] p-2 text-[.55rem] font-normal text-black sm:text-[.7rem]">-->
<!--    <span>-->
<!--      <slot>Filler</slot>-->
<!--    </span>-->
<!--  </label>-->
<!--</template>-->

<template>
  <label
    :for="`${optionIndex}`"
    class="h-full w-full cursor-pointer rounded-sm bg-[#EEEEEE] p-2 text-[.55rem] font-normal text-black hover:bg-white hover:text-[#EF533F] hover:ring-1 hover:ring-[#EF533F] active:bg-white active:text-[#EF533F] active:ring-1 active:ring-[#EF533F] has-[:checked]:bg-[#EF533F] has-[:checked]:text-white sm:text-[.7rem]">
    <input
      :id="`${optionIndex}`"
      :name="`${questionIndex}`"
      :value="value"
      class="peer hidden"
      type="radio"
      @change="$emit('selectAnswer', optionIndex, value)" />
    <span>
      <slot>Filler</slot>
    </span>
  </label>
</template>

<style scoped></style>
