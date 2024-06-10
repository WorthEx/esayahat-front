<script>
import useVuelidate from "@vuelidate/core"
import { helpers, minLength, required, sameAs } from "@vuelidate/validators"
import constants from "@/constants.js"
import { toMainPage, toSignInPage } from "@/utils.js"

export default {
  name: "ChangePasswordPage",
  data() {
    return {
      v$: useVuelidate(),
      newPassword1: "",
      newPassword2: "",
      password1Hidden: true,
      password1Focused: false,
      password2Hidden: true,
      password2Focused: false,
      resetToken: this.$route.params.resetToken,
    }
  },
  validations() {
    return {
      newPassword1: {
        required: helpers.withMessage("Введите новый пароль.", required),
        minLength: helpers.withMessage(
          "Пароль должен содержать от 8 символов.",
          minLength(8),
        ),
        checkRegex: helpers.withMessage(
          "Пароль должен состоять из латинских букв и содержать заглавную букву, цифру и спец. символ (@, $, !, %, *, ?, &).",
          helpers.regex(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          ),
        ),
        $autoDirty: true,
      },
      newPassword2: {
        required: helpers.withMessage("Повторите новый пароль.", required),
        sameAs: helpers.withMessage(
          "Пароли не совпадают.",
          sameAs(this.newPassword1),
        ),
        $autoDirty: true,
      },
    }
  },
  methods: {
    toMainPage,
    async changePassword() {
      if (this.v$.$errors.length <= 0 && this.v$.$anyDirty) {
        this.v$.$reset()
        const payload = {
          new_password: this.newPassword1,
          confirm_password: this.newPassword2,
        }
        const response = await this.$axios
          .post(
            `/auths/password/reset/done/${this.$route.params.resetToken}/`,
            payload,
          )
          .catch((error) => {
            console.log(error.toString())
            alert("Password reset failed. Please try again later!")
          })
        if ((await response).status === 200) {
          localStorage.setItem(constants.accessToken, null)
          localStorage.setItem(constants.refreshToken, null)
          alert("Changed password successfully!")
          await toSignInPage()
          this.clearChangePasswordData()
        }
      }
    },
    clearChangePasswordData() {
      this.newPassword1 = ""
      this.newPassword2 = ""
    },
  },
}
</script>

<template>
  <div
    class="absolute top-0 -z-[101] h-full w-full animate-pulse bg-slate-950"></div>
  <img
    alt=""
    class="absolute top-0 -z-[100] h-full w-full object-cover blur-[2px] brightness-[80%]"
    src="@/assets/images/background-1.png" />
  <div class="h-full min-h-screen w-full pb-8 pt-2">
    <Container>
      <div
        class="mx-auto flex h-fit animate-fade-up select-none flex-col gap-2.5 overflow-hidden rounded-[18px] bg-white px-4 py-2.5 text-center animate-delay-[300ms] animate-duration-[600ms] animate-once sm:w-72">
        <span class="text-[24px] font-bold">Обновите свой пароль</span>
        <form class="flex flex-col gap-2.5" method="post">
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[14px]">Новый пароль</label>
            <div class="flex flex-row">
              <input
                v-if="password1Hidden"
                v-model="newPassword1"
                :class="{
                  'border-red-600': v$.newPassword1.$error,
                  'focus:border-red-600': v$.newPassword1.$error,
                }"
                class="w-full rounded-l-[0.3rem] border-b border-l border-t border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
                placeholder="********"
                type="password"
                @focusin="password1Focused = !password1Focused"
                @focusout="password1Focused = !password1Focused" />
              <input
                v-else
                v-model="newPassword1"
                :class="{
                  'border-red-600': v$.newPassword1.$error,
                  'focus:border-red-600': v$.newPassword1.$error,
                }"
                class="w-full rounded-l-[0.3rem] border-b border-l border-t border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
                placeholder="********"
                type="text"
                @focusin="password1Focused = !password1Focused"
                @focusout="password1Focused = !password1Focused" />
              <div
                :class="{
                  'border-[#4285F4]':
                    password1Focused && !v$.newPassword1.$error,
                  'border-red-600': v$.newPassword1.$error,
                }"
                class="flex aspect-square w-7 cursor-pointer items-center justify-center rounded-r-[0.3rem] border-b border-r border-t border-[#ADADAD] pr-1">
                <i
                  :class="password1Hidden ? 'bi-eye' : 'bi-eye-slash'"
                  class="bi block text-black"
                  @click.prevent="password1Hidden = !password1Hidden"></i>
              </div>
            </div>
            <div
              v-if="v$.newPassword1.$error"
              class="flex w-full flex-col text-left text-[14px]">
              <span
                v-for="error in v$.newPassword1.$errors"
                class="text-red-600">
                - {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[14px]">Повторите новый пароль</label>
            <div class="flex flex-row">
              <input
                v-if="password2Hidden"
                v-model="newPassword2"
                :class="{
                  'border-red-600': v$.newPassword2.$error,
                  'focus:border-red-600': v$.newPassword2.$error,
                }"
                class="w-full rounded-l-[0.3rem] border-b border-l border-t border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
                placeholder="********"
                type="password"
                @focusin="password2Focused = !password2Focused"
                @focusout="password2Focused = !password2Focused" />
              <input
                v-else
                v-model="newPassword2"
                :class="{
                  'border-red-600': v$.newPassword2.$error,
                  'focus:border-red-600': v$.newPassword2.$error,
                }"
                class="w-full rounded-l-[0.3rem] border-b border-l border-t border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
                placeholder="********"
                type="text"
                @focusin="password2Focused = !password2Focused"
                @focusout="password2Focused = !password2Focused" />
              <div
                :class="{
                  'border-[#4285F4]':
                    password2Focused && !v$.newPassword2.$error,
                  'border-red-600': v$.newPassword2.$error,
                }"
                class="flex aspect-square w-7 cursor-pointer items-center justify-center rounded-r-[0.3rem] border-b border-r border-t border-[#ADADAD] pr-1">
                <i
                  :class="password2Hidden ? 'bi-eye' : 'bi-eye-slash'"
                  class="bi block text-black"
                  @click.prevent="password2Hidden = !password2Hidden"></i>
              </div>
            </div>
            <div
              v-if="v$.newPassword2.$error"
              class="flex w-full flex-col text-left text-[14px]">
              <span
                v-for="error in v$.newPassword2.$errors"
                class="text-red-600">
                - {{ error.$message }}
              </span>
            </div>
          </div>
          <button
            class="rounded-[0.3rem] bg-[#4B7DDD] py-1.5 text-[14px] font-medium text-white transition-all duration-150 ease-in-out hover:drop-shadow-md active:bg-[#21B3E2] active:drop-shadow-none"
            type="submit"
            @click.prevent="changePassword()">
            Сменить пароль
          </button>
          <span class="text-[14px]"
            >Передумали?&nbsp;
            <span
              class="cursor-pointer text-[#E9583B] hover:underline"
              @click="toMainPage()"
              >На главную</span
            >
          </span>
        </form>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
