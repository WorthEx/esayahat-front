import { defineStore } from "pinia";
import constants from "@/constants.js";
import router from "@/router/router.js";

export const useStore = defineStore("store", {
  state: () => ({
    signInData: {
      email: "",
      password: "",
    },
    signUpData: {
      email: "EMAIL",
      password: "PASSWORD",
      firstname: "FIRSTNAME",
      lastname: "LASTNAME",
    },
    currentUser: {
      email: "COOL.EMAIL@GMAIL.COM",
      firstname: "firstname",
      lastname: "lastname",
      role: "ROLE",
    },
  }),
  actions: {
    async signIn(email, password) {
      // todo
      localStorage.setItem(constants.authorized, "true");
    },
    async signUp(email, password, firstname, lastname) {
      //todo
    },
    logout() {
      // todo call api logout
      localStorage.setItem(constants.accessToken, "");
      localStorage.setItem(constants.refreshToken, "");
      localStorage.setItem(constants.authorized, "false");
      router.push("/sign-in");
    },
  },
});
