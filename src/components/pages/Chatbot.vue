<script>
import ChatbotQuestion from "@/components/UI/ChatbotQuestion.vue"
import { questions } from "@/components/chatbotQuestions.js"
import { nextTick } from "vue"
import constants from "@/constants.js"
import AnswerRadio from "@/components/UI/AnswerRadio.vue"

export default {
  name: "Chatbot",
  components: { ChatbotQuestion, AnswerRadio },
  data() {
    return {
      questions: questions,
      questionsFinished: false,
      currentQuestion: 0,
    }
  },
  methods: {
    async nextQuestion() {
      this.commitAnswer(this.questions[this.currentQuestion].selected)
      const questionContainer = document.getElementById("questions")
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
      } else {
        this.questionsFinished = true
      }
      await nextTick()
      questionContainer.scrollTop = questionContainer.scrollHeight
    },
    commitAnswer(answer) {
      this.$store.commit("addAnswers", {
        questionIndex: this.currentQuestion,
        answer: answer,
      })
      console.log(...this.$store.state.chatbotAnswers)
    },
    selectAnswer(value) {
      this.questions[this.currentQuestion].selected = value
    },
  },
  computed: {
    constants() {
      return constants
    },
    getCurrentQuestion() {
      let question = this.questions[this.currentQuestion]
      question.index = this.currentQuestion
      return question
    },
  },
  watch: {
    questionsFinished() {
      // todo do something when no more questions left
    },
  },
}
// window.onbeforeunload = function () {
//   return "Wanna lose everything huh?"
// }
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-white"></div>
  <div class="grid h-full min-h-[90vh] w-full pb-8 pt-0 md:pt-8">
    <Container class="px-0">
      <div
        class="animate-fade-up select-none animate-delay-[300ms] animate-duration-[600ms] animate-once">
        <div
          class="relative flex h-full w-full flex-col gap-2 overflow-hidden rounded-sm bg-[#E4ECF4] p-2 sm:rounded-xl sm:p-3 lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
          <div
            id="questions"
            class="z-10 flex h-[60vh] w-full flex-col gap-4 overflow-y-auto">
            <template v-for="(question, index) in questions">
              <ChatbotQuestion
                v-if="currentQuestion >= index"
                :key="index"
                :question1="question.question1"
                :question2="question.question2">
              </ChatbotQuestion>
            </template>
          </div>
          <div
            class="flex w-full flex-col-reverse items-end justify-between gap-2 sm:flex-row">
            <div
              class="z-20 max-h-[25vh] w-full items-center overflow-y-auto rounded-md bg-white p-1.5">
              <div
                class="grid w-full grid-cols-1 gap-2 sm:grid-cols-[auto_auto] xl:sm:grid-cols-[auto_auto_auto]">
                <AnswerRadio
                  v-for="(option, index) in getCurrentQuestion.options"
                  v-if="getCurrentQuestion.type === constants.radioType"
                  :key="index"
                  :optionIndex="index"
                  :questionIndex="getCurrentQuestion.index"
                  :value="option"
                  @selectAnswer="selectAnswer"
                  >{{ option }}
                </AnswerRadio>
                <div v-else>NO OPTIONS FOUND</div>
              </div>
            </div>
            <button
              class="flex h-fit w-full justify-center rounded-md bg-[#EF533F] text-[.7em] text-white transition-colors duration-200 hover:bg-white hover:text-[#EF533F] hover:ring-1 hover:ring-[#EF533F] active:bg-[#EF533F] active:text-white active:ring-0 sm:w-fit sm:px-4 sm:py-2"
              type="submit"
              @click.prevent="nextQuestion">
              <span class="hidden sm:block">Отправить</span>
              <i
                class="bi bi-search grid h-7 w-7 place-items-center sm:hidden"></i>
            </button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
