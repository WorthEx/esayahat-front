<script>
import ChatbotQuestion from "@/components/UI/ChatbotQuestion.vue"
import { questions } from "@/components/chatbotQuestions.js"
import { nextTick } from "vue"
import constants from "@/constants.js"
import AnswerRadio from "@/components/UI/AnswerRadio.vue"
import AnswerCheckbox from "@/components/UI/AnswerCheckbox.vue"

export default {
  name: "Chatbot",
  components: { AnswerCheckbox, ChatbotQuestion, AnswerRadio },
  data() {
    return {
      questions: questions,
      questionsFinished: false,
      currentQuestion: 0,
    }
  },
  methods: {
    async nextQuestion() {
      this.commitAnswer(
        this.questions[this.currentQuestion].selected,
        this.questions[this.currentQuestion].selectedContent,
      )
      console.log(this.$store.getters.getAllAnswers)
      const questionContainer = document.getElementById("questions")
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
      } else {
        this.questionsFinished = true
      }
      await nextTick()
      questionContainer.scrollTop = questionContainer.scrollHeight
    },
    commitAnswer(answer, answerContent) {
      this.$store.commit("addAnswers", {
        questionIndex: this.currentQuestion,
        answer: answer,
        answerContent: answerContent,
      })
    },
    selectRadioAnswer(optionIndex, optionContent) {
      this.questions[this.currentQuestion].selected = optionIndex
      this.questions[this.currentQuestion].selectedContent = optionContent
    },
    selectCheckboxAnswer(optionIndex, optionContent) {
      if (
        this.questions[this.currentQuestion].selected.indexOf(optionIndex) ===
          -1 &&
        this.questions[this.currentQuestion].selectedContent.indexOf(
          optionContent,
        ) === -1
      ) {
        this.questions[this.currentQuestion].selected.push(optionIndex)
        this.questions[this.currentQuestion].selectedContent.push(optionContent)
      } else {
        this.questions[this.currentQuestion].selected = this.questions[
          this.currentQuestion
        ].selected.filter((selected) => optionIndex !== selected)

        this.questions[this.currentQuestion].selectedContent = this.questions[
          this.currentQuestion
        ].selectedContent.filter(
          (selectedContent) => optionContent !== selectedContent,
        )
      }
    },
  },
  computed: {
    constants() {
      return constants
    },
    anyAnswersChecked() {
      if (Array.isArray(this.questions[this.currentQuestion].selected)) {
        return this.questions[this.currentQuestion].selected.length > 0
      }
      return true
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
//todo decomment in production
// window.onbeforeunload = function () {
//   return "Wanna lose everything huh?"
// }
</script>

<template>
  <div class="absolute top-0 -z-[1000] h-full w-full bg-white"></div>
  <div class="grid h-full min-h-[90vh] w-full pb-8 pt-0 md:pt-8">
    <Container>
      <div
        class="animate-fade-up select-none animate-delay-[300ms] animate-duration-[600ms] animate-once">
        <div
          class="relative flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg bg-[#E4ECF4] p-2 sm:rounded-xl sm:p-3 lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
          <div
            id="questions"
            class="z-10 flex h-[50vh] w-full flex-col gap-4 overflow-y-auto">
            <template v-for="(question, index) in questions">
              <ChatbotQuestion
                v-if="currentQuestion >= index"
                :key="index"
                :question1="question.question1"
                :question2="question.question2"
                :selectedContent="questions[index].selectedContent">
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
                  @selectAnswer="selectRadioAnswer"
                  >{{ option }}
                </AnswerRadio>
                <AnswerCheckbox
                  v-for="(option, index) in getCurrentQuestion.options"
                  v-if="getCurrentQuestion.type === constants.checkboxType"
                  :key="index"
                  :optionIndex="index"
                  :questionIndex="getCurrentQuestion.index"
                  :value="option"
                  @selectAnswer="selectCheckboxAnswer"
                  >{{ option }}
                </AnswerCheckbox>
                <div v-else class="px-4 py-2.5"></div>
              </div>
            </div>
            <button
              :disabled="
                getCurrentQuestion.selected == null || !anyAnswersChecked
              "
              class="flex h-fit w-full justify-center rounded-md bg-[#EF533F] text-[.7em] text-white transition-colors duration-200 active:enabled:bg-white active:enabled:text-[#EF533F] active:enabled:ring-1 active:enabled:ring-[#EF533F] disabled:bg-[#EF533F]/30 active:disabled:animate-shake active:disabled:animate-duration-75 active:disabled:animate-once active:disabled:animate-ease-linear sm:w-fit sm:px-4 sm:py-2 sm:enabled:hover:bg-white sm:enabled:hover:text-[#EF533F] sm:enabled:hover:ring-1 sm:enabled:hover:ring-[#EF533F]"
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
