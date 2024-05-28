<script>
import axios from "axios";
import { useStore } from "@/stores/store.js";

export default {
  name: "UserPage",
  data() {
    return {
      store: useStore(),
      pfp: null,
      editable: false,
    };
  },
  methods: {
    async loadPFP() {
      let response = await axios.get(
        `https://ui-avatars.com/api/?
    size=512&
    background=315FC3&
    rounded=true&
    color=fff&
    name=${
      this.store.currentUser.firstname + "+" + this.store.currentUser.lastname
    }`,
        {
          responseType: "blob",
        },
      );
      this.pfp = URL.createObjectURL(response.data);
    },
  },
  created() {
    this.loadPFP();
  },
  computed: {
    currentFirstname() {
      return this.store.currentUser.firstname;
    },
    currentLastname() {
      return this.store.currentUser.lastname;
    },
  },
  watch: {
    currentFirstname() {
      this.pfp = null;
      this.loadPFP();
    },
    currentLastname() {
      this.pfp = null;
      this.loadPFP();
    },
  },
};
</script>

<template>
  <div
    class="m-auto grid h-full place-items-center items-start p-3 lg:px-10 lg:py-8">
    <div
      class="w-full animate-fade-up select-none overflow-hidden rounded-2xl bg-blue-200 p-5 shadow-xl ring-1 ring-slate-300 ring-opacity-80 animate-duration-[800ms] animate-once 2xl:p-8">
      <div class="flex flex-col xl:flex-row xl:justify-evenly">
        <div
          class="mb-7 h-40 w-40 animate-fade self-center rounded-full transition-all duration-[250ms] ease-out animate-duration-[800ms] animate-once hover:scale-[100.5%] hover:shadow-xl xl:mb-0 xl:mr-10 xl:h-60 xl:w-60">
          <img
            v-if="pfp"
            :src="pfp"
            alt=""
            class="h-full w-full"
            style="-webkit-user-drag: none" />
          <div
            v-if="!pfp"
            class="h-full w-full animate-pulse cursor-wait rounded-full bg-sky-800 opacity-75"></div>
        </div>

        <div
          class="grid grid-cols-1 gap-7 2xl:ml-10 2xl:grid-cols-2 2xl:gap-x-20 2xl:gap-y-20">
          <div
            class="flex animate-fade-right flex-col gap-1 animate-duration-[800ms] animate-once">
            <span
              class="bg-slate w-fit rounded-full bg-sky-800 px-4 py-0.5 font-normal text-white"
              >Firstname:</span
            >
            <span
              class="ext-slate-950 w-fit font-normal transition-all hover:translate-x-1">
              {{ store.currentUser.firstname }}</span
            >
          </div>
          <div
            class="flex animate-fade-right flex-col gap-1 animate-delay-100 animate-duration-[800ms] animate-once">
            <span
              class="bg-slate w-fit rounded-full bg-sky-800 px-4 py-0.5 font-normal text-white"
              >Lastname:</span
            >
            <span
              class="ext-slate-950 w-fit font-normal transition-all hover:translate-x-1"
              >{{ store.currentUser.lastname }}</span
            >
          </div>
          <div
            class="flex animate-fade-right flex-col gap-1 animate-delay-150 animate-duration-[800ms] animate-once">
            <span
              class="bg-slate w-fit rounded-full bg-sky-800 px-4 py-0.5 font-normal text-white"
              >Email address:</span
            >
            <span
              class="w-fit truncate font-normal text-slate-950 transition-all hover:translate-x-1"
              >{{ store.currentUser.email }}</span
            >
          </div>
          <div
            class="flex animate-fade-right flex-col gap-1 animate-delay-200 animate-duration-[800ms] animate-once">
            <span
              class="bg-slate w-fit rounded-full bg-sky-800 px-4 py-0.5 font-normal text-white"
              >Role:</span
            >
            <span
              class="w-fit font-normal text-slate-950 transition-all hover:translate-x-1"
              >{{ store.currentUser.role }}</span
            >
          </div>
        </div>
      </div>
      <button
        class="mt-4 w-full rounded-full py-1.5 font-medium text-sky-600 ring-2 ring-sky-600 transition-colors duration-300 ease-out hover:bg-sky-600 hover:text-slate-50 hover:shadow-md 2xl:mt-12"
        @click="store.logout()">
        Logout
      </button>
    </div>
  </div>
</template>

<style scoped></style>
