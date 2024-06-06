<script>
import useVuelidate from "@vuelidate/core"
import {
  helpers,
  integer,
  maxValue,
  minValue,
  required,
} from "@vuelidate/validators"

// custom filter
// const positive = (number) => Number(number) >= 0

export default {
  name: "AnswerNumber",
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  data() {
    return {
      inputValue: 0,
      v$: useVuelidate(),
    }
  },
  validations() {
    return {
      inputValue: {
        required: helpers.withMessage("Введите число.", required),
        min: helpers.withMessage(
          `Введите значение от ${this.min} до ${this.max}.`,
          minValue(this.min),
        ),
        max: helpers.withMessage(
          `Введите значение от ${this.min} до ${this.max}.`,
          maxValue(this.max),
        ),
        numeric: helpers.withMessage("Число не целое.", integer),
        $autoDirty: true,
      },
    }
  },
  methods: {
    emitResult(number) {
      if (this.v$.inputValue.$error) {
        this.$emit("selectAnswer", null)
      } else this.$emit("selectAnswer", number)
    },
  },
  emits: ["selectAnswer"],
}
</script>

<template>
  <label
    :for="`number-input-${questionIndex}`"
    class="flex h-full w-fit items-center px-2 text-[.55rem] font-normal text-black sm:text-[.65rem]"
    >Введите числовое значение:
  </label>

  <input
    :id="`number-input-${questionIndex}`"
    v-model="inputValue"
    :class="{
      'border-red-600': v$.inputValue.$error,
      'focus:border-red-600': v$.inputValue.$error,
    }"
    :name="`${questionIndex}`"
    autofocus
    class="w-full rounded-[0.3rem] border border-[#ADADAD] px-2 py-1.5 text-[.55rem] font-normal focus:border-[#4285F4] sm:text-[.65rem]"
    type="number"
    @input="emitResult($event.target.value)" />
  <ol
    v-if="v$.inputValue.$error"
    class="w-full list-inside list-disc px-1 pb-1 text-left text-[.55rem] sm:text-[.65rem] lg:col-start-2">
    <li v-for="error in v$.inputValue.$errors" class="text-red-600">
      {{ error.$message }}
    </li>
  </ol>
</template>

<style scoped></style>
