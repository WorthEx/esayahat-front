import router from "@/router/router.js"
import { toast } from "vue3-toastify"

export const toSignInPage = async function () {
  await router.push("/sign-in")
}

export const toSignUpPage = async function () {
  await router.push("/sign-up")
}

export const toMainPage = async function () {
  await router.push("/")
}

export const toHash = async function (hash) {
  await router.push({ name: "Main", hash: `#${hash}` })
}

export const toUserPage = async function (id) {
  await router.push(`/user/${id}`)
}

export const toChatbot = async function () {
  await router.push(`/chatbot`)
}
