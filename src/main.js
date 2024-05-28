import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import components from "./components/UI"
import router from "@/router/router.js"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import constants from "@/constants.js"
import VueAxios from "vue-axios"
import { createStore } from "vuex"

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
  state: {
    signInData: {
      email: "",
      password: "",
    },
    signUpData: {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      passwordConfirm: "",
    },
  },
  mutations: {
    // for direct state mutating
  },
  actions: {
    //mostly for async operations
    async signUp(context, signUpData) {
      const payload = {
        username: signUpData.username,
        first_name: signUpData.firstname,
        last_name: signUpData.lastname,
        email: signUpData.email,
        password: signUpData.password,
        password2: signUpData.passwordConfirm,
      }
      const response = await apiInstance
        .post("/auths/users/", payload)
        .catch((error) => {
          alert(error.toString())
        })
      console.log(response.data)
    },
  },
})

app.use(store)

components.forEach((component) => {
  app.component(component.name, component)
})
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
