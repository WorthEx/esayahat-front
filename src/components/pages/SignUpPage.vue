<script>
import useVuelidate from "@vuelidate/core"
import router from "@/router/router.js"
import {
  email,
  helpers,
  maxLength,
  minLength,
  required,
  sameAs,
} from "@vuelidate/validators"

export default {
  name: "SignUpPage",
  data() {
    return {
      signUpData: {
        username: "",
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        passwordConfirm: "",
      },
      v$: useVuelidate(),
    }
  },
  methods: {
    async signUp() {
      // await this.v$.$validate()
      if (this.v$.$errors.length <= 0 && this.v$.$anyDirty) {
        this.v$.$reset()
        const payload = {
          username: this.signUpData.username,
          first_name: this.signUpData.firstname,
          last_name: this.signUpData.lastname,
          email: this.signUpData.email,
          password: this.signUpData.password,
          password2: this.signUpData.passwordConfirm,
        }
        const response = await this.$axios
          .post("/auths/users/", payload)
          .catch((error) => {
            console.log(error.toString())
          })
        if (response.status === 201 || response.status === 200) {
          this.clearSignUpData()
          this.toSignInPage()
        }
      }
    },
    clearSignUpData() {
      this.signUpData.username = ""
      this.signUpData.email = ""
      this.signUpData.firstname = ""
      this.signUpData.lastname = ""
      this.signUpData.password = ""
      this.signUpData.passwordConfirm = ""
    },
    toSignInPage() {
      router.push("/sign-in").then((_) => window.scrollTo(0, 0))
    },
  },
  validations() {
    return {
      signUpData: {
        username: {
          required: helpers.withMessage("Введите имя пользователя.", required),
          maxLength: helpers.withMessage(
            "Имя пользователя должно быть не длиннее, чем 20 символов.",
            maxLength(20),
          ),
          checkRegex: helpers.withMessage(
            "Имя пользователя может содержать только из латинские буквы, " +
              "цифры, а также следующие символы . @ + -",
            helpers.regex(/^[\w.@+-]+$/),
          ),
          $autoDirty: true,
        },
        email: {
          required: helpers.withMessage(
            "Введите адрес электронной почты.",
            required,
          ),
          email: helpers.withMessage(
            "Некорректный адрес электронной почты.",
            email,
          ),
          $autoDirty: true,
        },
        firstname: {
          required: helpers.withMessage("Введите своё имя.", required),
          $autoDirty: true,
        },
        lastname: {
          required: helpers.withMessage("Введите свою фамилию.", required),
          $autoDirty: true,
        },
        password: {
          required: helpers.withMessage("Введите пароль.", required),
          minLength: helpers.withMessage(
            "Пароль должен содержать от 6 символов.",
            minLength(6),
          ),
          $autoDirty: true,
        },
        passwordConfirm: {
          required: helpers.withMessage("Повторите пароль.", required),
          sameAs: helpers.withMessage(
            "Пароли не совпадают.",
            sameAs(this.signUpData.password),
          ),
          $autoDirty: true,
        },
      },
    }
  },
}
</script>

<template>
  <img
    alt="background image"
    class="absolute top-0 -z-[1000] h-full w-full object-cover brightness-[90%]"
    src="@/assets/images/background-1.png" />
  <div
    class="h-full min-h-[calc(100vh+10rem)] w-full px-5 py-3 pt-4 lg:px-24 xl:px-[8.5rem]">
    <div
      class="mx-auto flex flex-col justify-center gap-8 overflow-hidden md:flex-row">
      <div
        class="flex w-full animate-fade-up select-none flex-col gap-2.5 rounded-[18px] bg-white px-4 pb-2 pt-2.5 text-center animate-delay-[300ms] animate-duration-[600ms] animate-once md:w-[80rem]">
        <span class="text-md font-bold">Регистрация</span>
        <form class="flex flex-col gap-2.5" method="post">
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]"
              >Уникальное имя пользователя</label
            >
            <input
              v-model="signUpData.username"
              :class="{
                'border-red-600': v$.signUpData.username.$error,
                'focus:border-red-600': v$.signUpData.username.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="AceRevolutioner1991"
              type="text" />
            <div
              v-if="v$.signUpData.username.$error"
              class="flex w-full flex-col text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.username.$errors"
                class="text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]">Имя</label>
            <input
              v-model="signUpData.firstname"
              :class="{
                'border-red-600': v$.signUpData.firstname.$error,
                'focus:border-red-600': v$.signUpData.firstname.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="Владимир"
              type="text" />
            <div
              v-if="v$.signUpData.firstname.$error"
              class="w-full text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.firstname.$errors"
                class="text-[12px] text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]">Фамилия</label>
            <input
              v-model="signUpData.lastname"
              :class="{
                'border-red-600': v$.signUpData.lastname.$error,
                'focus:border-red-600': v$.signUpData.lastname.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="Ленин"
              type="text" />
            <div
              v-if="v$.signUpData.lastname.$error"
              class="w-full text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.lastname.$errors"
                class="text-[12px] text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]">Электронная почта</label>
            <input
              v-model="signUpData.email"
              :class="{
                'border-red-600': v$.signUpData.email.$error,
                'focus:border-red-600': v$.signUpData.email.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="our.mail@party.comm"
              type="email" />
            <div
              v-if="v$.signUpData.email.$error"
              class="w-full text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.email.$errors"
                class="text-[12px] text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]"
              >Придумайте надежный пароль</label
            >
            <input
              v-model="signUpData.password"
              :class="{
                'border-red-600': v$.signUpData.password.$error,
                'focus:border-red-600': v$.signUpData.password.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="*********"
              type="password" />
            <div
              v-if="v$.signUpData.password.$error"
              class="w-full text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.password.$errors"
                class="text-[12px] text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-0.5">
            <label class="text-start text-[12px]">Повторите пароль</label>
            <input
              v-model="signUpData.passwordConfirm"
              :class="{
                'border-red-600': v$.signUpData.passwordConfirm.$error,
                'focus:border-red-600': v$.signUpData.passwordConfirm.$error,
              }"
              class="w-full rounded-[0.3rem] border-[1px] border-[#ADADAD] px-2 py-1.5 text-[14px] focus:border-[#4285F4]"
              placeholder="*********"
              type="password" />
            <div
              v-if="v$.signUpData.passwordConfirm.$error"
              class="w-full text-left text-[12px]">
              <span
                v-for="error in v$.signUpData.passwordConfirm.$errors"
                class="text-[12px] text-red-600">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <button
            class="w-full rounded-[0.3rem] bg-[#4B7DDD] py-1.5 text-[12px] font-medium text-white transition-all duration-150 ease-in-out hover:drop-shadow-md active:drop-shadow-none"
            type="submit"
            @click.prevent="signUp">
            Создать аккаунт
          </button>
          <span class="text-[12px]"
            >У вас уже есть аккаунт?&nbsp;
            <span
              class="cursor-pointer text-[#E9583B] hover:underline"
              @click="toSignInPage()"
              >Войти</span
            >
          </span>
        </form>
      </div>
      <div class="flex select-none flex-col gap-3">
        <span class="text-[33px] font-medium text-white"
          >Добро пожаловать!</span
        >
        <p class="select-none text-justify text-[14px] font-normal text-white">
          <b class="text-[16px] font-bold">E-Sayahat</b> — Ваш проводник в мир
          незабываемых путешествий. Мы специализируемся на создании уникальных
          туров по самым интересным и захватывающим направлениям по всему миру.
          Наша команда опытных профессионалов обеспечит вам высочайший уровень
          сервиса и индивидуальный подход к каждому клиенту.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
