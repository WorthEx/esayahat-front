import router from "@/router/router.js"

export const toSignInPage = async function () {
  await router.push("/sign-in")
}

export const toSignUpPage = async function () {
  await router.push("/sign-up")
}

export const toMainPage = async function () {
  await router.push("/")
}

export const toUserPage = async function (id) {
  await router.push(`/user/${id}`)
}
