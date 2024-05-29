import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "@/router/router.js"
import VueAxios from "vue-axios"
import { createStore } from "vuex"
import constants from "@/constants.js"

const apiInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      localStorage.getItem(constants.accessToken) != null &&
      localStorage.getItem(constants.accessToken) !== ""
        ? `Bearer ${localStorage.getItem(constants.accessToken)}`
        : "",
  },
})

const app = createApp(App).use(VueAxios, axios).use(router)

app.config.globalProperties.$axios = apiInstance

const store = createStore({
  state: {},
  mutations: {
    // for state mutations
  },
  actions: {
    //mostly for async operations
  },
})

app.use(store)
app.mount("#app")
