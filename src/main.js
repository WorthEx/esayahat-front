import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "@/router/router.js"
import VueAxios from "vue-axios"
import { createStore } from "vuex"
import constants from "@/constants.js"
import components from "@/components/UI/components.js"
import Vue3Toastify from "vue3-toastify"
import "vue3-toastify/dist/index.css"

const apiInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
})
apiInstance.interceptors.request.use((request) => {
  if (
    localStorage.getItem(constants.accessToken) != null &&
    localStorage.getItem(constants.accessToken) !== "null"
  ) {
    request.headers.Authorization = `Bearer ${localStorage.getItem(constants.accessToken)}`
    console.log("Added auth token!")
  }
  console.log("Starting Request", JSON.stringify(request, null, 2))
  return request
})

const app = createApp(App).use(VueAxios, axios).use(router)

app.config.globalProperties.$axios = apiInstance

components.forEach((component) => {
  app.component(component.name, component)
})

const store = createStore({
  state: {
    chatbotAnswers: [],
  },
  mutations: {
    addAnswers(state, { questionIndex, answer, answerContent }) {
      state.chatbotAnswers.push({
        questionIndex,
        answer,
        answerContent,
      })
    },
  },
  getters: {
    getAllAnswers(state) {
      return state.chatbotAnswers
    },
  },
})

app.use(store)
app.use(Vue3Toastify, {
  position: "top-center",
  type: "default",
  autoClose: 2500,
  // transition: "slide",
  dangerouslyHTMLString: true,
})
app.mount("#app")
