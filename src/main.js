import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "@/router/router.js"
import VueAxios from "vue-axios"
import { createStore } from "vuex"
import constants from "@/constants.js"
import components from "@/components/UI/components.js"

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
