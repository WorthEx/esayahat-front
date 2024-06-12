<script>
import { vMaska } from "maska"
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"

import toursImg1 from "@/assets/images/tour_card_1.png"
import toursImg2 from "@/assets/images/tour_card_2.png"
import toursImg3 from "@/assets/images/tour_card_3.png"
import toursImg4 from "@/assets/images/tour_card_4.png"
import toursImg5 from "@/assets/images/tour_card_5.png"
import toursImg6 from "@/assets/images/tour_card_6.png"
import toursImg7 from "@/assets/images/tour_card_7.png"

import lowestImg1 from "@/assets/images/lowest_card_1.png"
import lowestImg2 from "@/assets/images/lowest_card_2.png"
import lowestImg3 from "@/assets/images/lowest_card_3.png"
import lowestImg4 from "@/assets/images/lowest_card_4.png"
import lowestImg5 from "@/assets/images/lowest_card_5.png"
import lowestImg6 from "@/assets/images/lowest_card_6.png"
import lowestImg7 from "@/assets/images/lowest_card_7.png"
import lowestImg8 from "@/assets/images/lowest_card_8.png"
import lowestImg9 from "@/assets/images/lowest_card_9.png"
import lowestImg10 from "@/assets/images/lowest_card_10.png"
import lowestImg11 from "@/assets/images/lowest_card_11.png"
import lowestImg12 from "@/assets/images/lowest_card_12.png"
import Container from "@/components/UI/Container.vue"
import { toChatbot } from "@/utils.js"
import { toast } from "vue3-toastify"

export default {
  name: "HomePage",
  directives: { maska: vMaska },
  components: {
    Container,
    Swiper,
    SwiperSlide,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
    let today = new Date()
    today.setHours(0, 0, 0, 0)
    this.today = today
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  data() {
    return {
      today: null,
      maskedValue: this.money,
      showScrollToTopButton: false,
      nights: 1,
      nightsError: false,
      bindedObject: {
        masked: "",
        unmasked: "",
        completed: false,
      },
      tours: [
        {
          discount: "-51%",
          date: "28.05.2024",
          to: "Горящие туры в Турцию из",
          from: "Алматы",
          oldPrice: "1 439 097〒",
          price: "953 284〒",
          img: toursImg1,
        },
        {
          discount: "-47%",
          date: "28.05.2024",
          to: "Горящие туры на",
          from: "Мальдивы из Алматы",
          oldPrice: "1 140 134〒",
          price: "778 150〒",
          img: toursImg2,
        },
        {
          discount: "-14%",
          date: "14.08.2024",
          to: "Горящие туры в Турцию из",
          from: "Астаны",
          oldPrice: "991 958〒",
          price: "867 479〒",
          img: toursImg3,
        },
        {
          discount: "-24%",
          date: "24.05.2024",
          to: "Горящие туры в Египет из",
          from: "Алматы",
          oldPrice: "906 504〒",
          price: "730 541〒",
          img: toursImg4,
        },
        {
          discount: "-7%",
          date: "25.05.2024",
          to: "Горящие туры в Тайланд",
          from: "из Астаны",
          oldPrice: "1 734 064〒",
          price: "1 617 969〒",
          img: toursImg5,
        },
        {
          discount: "-6%",
          date: "25.05.2024",
          to: "Горящие туры во Вьетнам",
          from: "из Алматы",
          oldPrice: "996 486〒",
          price: "939 546〒",
          img: toursImg6,
        },
        {
          discount: "-6%",
          date: "25.05.2024",
          to: "Горящие туры в Турцию из",
          from: "Алматы",
          oldPrice: "1 439 097〒",
          price: "953 284〒",
          img: toursImg7,
        },
      ],
      lowest: [
        {
          country: "Абхазия",
          from: "из Москвы",
          date: "29 Мая",
          time: "7 ночей",
          price: "10 942",
          img: lowestImg1,
        },
        {
          country: "Россия",
          from: "из Москвы",
          date: "29 Мая",
          time: "6 ночей",
          price: "11 035",
          img: lowestImg2,
        },
        {
          country: "Красная Поляна",
          from: "Россия из Москвы",
          date: "29 Мая",
          time: "6 ночей",
          price: "13 316",
          img: lowestImg3,
        },
        {
          country: "Турция",
          from: "из Москвы",
          date: "24 Мая",
          time: "7 ночей",
          price: "23 248",
          img: lowestImg4,
        },
        {
          country: "Катар",
          from: "из Москвы",
          date: "31 Мая",
          time: "7 ночей",
          price: "25 841",
          img: lowestImg5,
        },
        {
          country: "Мармарис",
          from: "Турция из Москвы",
          date: "24 Мая",
          time: "6 ночей",
          price: "28 567",
          img: lowestImg6,
        },
        {
          country: "ОАЭ",
          from: "из Москвы",
          date: "27 Мая",
          time: "6 ночей",
          price: "29 379",
          img: lowestImg7,
        },
        {
          country: "Шарджа",
          from: "ОАЭ из Москвы",
          date: "23 Мая",
          time: "6 ночей",
          price: "29 705",
          img: lowestImg8,
        },
        {
          country: "Бахрейн",
          from: "из Москвы",
          date: "31 Мая",
          time: "7 ночей",
          price: "36 131",
          img: lowestImg9,
        },
        {
          country: "Египет",
          from: "из Москвы",
          date: "24 Мая",
          time: "6 ночей",
          price: "37 732",
          img: lowestImg10,
        },
        {
          country: "Хургада",
          from: "Египет из Москвы",
          date: "27 Мая",
          time: "6 ночей",
          price: "42 877",
          img: lowestImg11,
        },
        {
          country: "Армения",
          from: "из Москвы",
          date: "29 Мая",
          time: "6 ночей",
          price: "44 372",
          img: lowestImg12,
        },
      ],
      flightDate1: null,
      flightDate2: null,
      flightDate1Error: false,
      flightDate2Error: false,
      hotel: 1,
      searchType: 1,
      searchTypes: ["Туры с перелетом", "Отели"],
      touristsSelectOpen: false,
      tourists: [
        {
          title: "Взрослые",
          shortTitle: "взр.",
          subtitle: "Старше 12 лет",
          count: 1,
        },
        {
          title: "Дети",
          shortTitle: "дет.",
          subtitle: "От 2 до 12 лет",
          count: 0,
        },
        {
          title: "Младенцы",
          shortTitle: "млд.",
          subtitle: "До 2 лет, без места",
          count: 0,
        },
      ],
      fromCities: ["Москва", "Санкт-Петербург", "Мариэлла", "Подольск"],
      toCountries: ["Египет", "ОАЭ", "Испания", "Италия", "США"],
    }
  },
  methods: {
    toChatbot,
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    handleScroll() {
      this.showScrollToTopButton = window.scrollY > 1000
    },
    validateFlightDates() {
      this.flightDate1Error = new Date(this.flightDate1) < this.today
      this.flightDate2Error =
        new Date(this.flightDate2) < new Date(this.flightDate1)
    },
    validateNights() {
      this.nightsError = this.nights < 1 || this.nights > 365
    },
    searchTours() {
      this.validateFlightDates()
      this.validateNights()
      if (
        !this.flightDate1Error &&
        !this.flightDate2Error &&
        !this.nightsError
      ) {
        // todo send tour search request
      } else toast.error("Проверьте корректность введённых фильтров.")
    },
  },
}
</script>

<template>
  <img
    alt="Background image"
    class="fixed top-0 -z-[1] h-screen w-full select-none object-cover object-center"
    src="@/assets/images/background-1.png" />
  <div class="relative h-full w-full overflow-hidden">
    <!-- Home -->
    <section
      class="relative flex h-fit min-h-[calc(100vh-3rem)] w-full items-center overflow-hidden bg-transparent pb-10">
      <Container>
        <div class="flex flex-col gap-4 lg:px-10">
          <div
            class="relative flex animate-fade-up flex-col items-start justify-between gap-2 animate-delay-[400ms] animate-duration-[700ms] animate-once md:flex-row md:items-end">
            <span
              class="font-roboto line select-none text-[1.7em] font-bold uppercase leading-tight text-white sm:text-[2.7em]">
              Откройте мир с E‑Sayahat
            </span>
            <div
              class="relative flex w-full items-center overflow-hidden rounded-full md:mb-2.5 md:w-fit md:min-w-[13rem]">
              <input
                class="font-roboto h-7 w-full cursor-pointer rounded-full bg-white py-1 ps-5 text-[.5rem] font-[400] text-[#7E7E7E]"
                placeholder="Поиск туров и курортов"
                type="text"
                @focus="toChatbot()" />
              <button
                class="absolute right-[.125rem] grid h-6 w-6 place-items-center rounded-full bg-[#1EC0CA]">
                <i
                  class="bi bi-search grid place-items-center text-xs text-white"></i>
              </button>
            </div>
          </div>
          <div
            class="flex w-full animate-fade-up flex-col gap-3 rounded-lg bg-[#1EC0CA] p-3 animate-delay-[600ms] animate-duration-[700ms] animate-once">
            <div
              class="font-roboto flex flex-col items-end justify-center gap-3 text-[.5rem] font-medium text-white md:flex-row md:items-center md:gap-6">
              <button
                v-for="(type, idx) in searchTypes"
                :key="idx"
                class="flex flex-row-reverse items-center gap-1.5 md:flex-row"
                @click="searchType = idx + 1">
                <span
                  class="grid h-3 w-3 place-items-center rounded-full bg-white">
                  <span
                    :class="{ hidden: searchType !== idx + 1 }"
                    class="h-1.5 w-1.5 rounded-full bg-[#027AD0]"></span>
                </span>
                <span class="text-left">{{ type }}</span>
              </button>
            </div>
            <div
              class="font-roboto flex w-full flex-wrap items-center gap-2 rounded-md bg-white px-2 pb-2 xl:flex-nowrap xl:pb-0">
              <div
                :class="searchType === 2 ? 'sm:grid-cols-2' : 'lg:grid-cols-3'"
                class="grid w-full grid-cols-1 gap-x-2 gap-y-2 px-1 py-2 *:select-none sm:grid-cols-2 md:px-4 xl:grid-cols-5">
                <div
                  class="flex flex-col justify-center *:w-full"
                  v-if="searchType === 1">
                  <label
                    class="text-[.5rem] font-medium text-[#AAB2BD]"
                    for="city"
                    >Город вылета</label
                  >
                  <select
                    id="city"
                    class="leading-2 text-[.6rem] font-bold text-[#2B3F5A]">
                    <option v-for="city in fromCities">
                      {{ city }}
                    </option>
                  </select>
                </div>
                <div class="flex flex-col justify-center *:w-full">
                  <label
                    class="text-[.5rem] font-medium text-[#AAB2BD]"
                    for="country"
                    >Страна</label
                  >
                  <select
                    id="country"
                    class="leading-2 text-[.6rem] font-bold text-[#2B3F5A]">
                    <option v-for="country in toCountries">
                      {{ country }}
                    </option>
                  </select>
                </div>
                <div
                  class="flex flex-col justify-center"
                  :class="searchType === 2 ? 'xl:col-span-2' : ''">
                  <label
                    class="text-[.5rem] font-medium text-[#AAB2BD]"
                    for="flightDate"
                    >Даты вылета</label
                  >
                  <div class="flex flex-row items-center gap-0.5">
                    <span class="text-[.5rem] font-medium text-[#AAB2BD]"
                      >От
                    </span>
                    <input
                      id="flightDate"
                      :class="
                        flightDate1Error ? 'border-b-2 border-red-600' : ''
                      "
                      @change="validateFlightDates"
                      class="leading-2 w-min text-[.6rem] font-bold text-[#2B3F5A]"
                      v-model="flightDate1"
                      type="date" />
                  </div>
                  <div class="flex flex-row items-center gap-0.5">
                    <span class="text-[.5rem] font-medium text-[#AAB2BD]"
                      >До</span
                    >
                    <input
                      @change="validateFlightDates"
                      :class="
                        flightDate2Error ? 'border-b-2 border-red-600' : ''
                      "
                      id="flightDate"
                      class="leading-2 w-min text-[.6rem] font-bold text-[#2B3F5A]"
                      v-model="flightDate2"
                      type="date" />
                  </div>
                </div>
                <div class="flex flex-col justify-center">
                  <label
                    class="text-[.5rem] font-medium text-[#AAB2BD]"
                    for="nights"
                    >Ночей</label
                  >
                  <input
                    type="number"
                    :class="this.nightsError ? 'border-b-2 border-red-600' : ''"
                    id="nights"
                    v-model="nights"
                    @input="validateNights"
                    class="leading-2 text-[.6rem] font-bold text-[#2B3F5A]" />
                </div>
                <div class="flex flex-col justify-center *:w-full">
                  <label class="text-[.5rem] font-medium text-[#AAB2BD]" for=""
                    >Туристы</label
                  >
                  <button
                    class="leading-2 w-full bg-transparent text-left text-[.6rem] font-bold text-[#2B3F5A]"
                    @click="touristsSelectOpen = !touristsSelectOpen">
                    <div class="flex flex-wrap gap-0.5">
                      <span v-for="(item, idx) in tourists" :key="idx">
                        <span v-if="item.count > 0">
                          {{ item.count }} {{ item.shortTitle }}
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <button
                @click="searchTours"
                class="font-roboto flex w-full shrink-0 items-center justify-center gap-2 rounded-[0.25rem] bg-[#F28119] px-3 py-2 transition-colors duration-200 hover:bg-[#1EC0CA]/80 xl:w-fit">
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5547 8.56421C13.5547 7.86108 13.4375 7.21655 13.2031 6.63062C12.9688 6.04468 12.6042 5.50431 12.1094 5.00952C11.6276 4.52775 11.0905 4.16642 10.498 3.92554C9.9056 3.68465 9.25781 3.56421 8.55469 3.56421C7.8776 3.56421 7.24609 3.6814 6.66016 3.91577C6.07422 4.15015 5.53385 4.51473 5.03906 5.00952C4.55729 5.49129 4.18945 6.0284 3.93555 6.62085C3.68164 7.2133 3.55469 7.86108 3.55469 8.56421C3.55469 9.24129 3.67839 9.8728 3.92578 10.4587C4.17318 11.0447 4.54427 11.585 5.03906 12.0798C5.52083 12.5616 6.05469 12.9294 6.64062 13.1833C7.22656 13.4373 7.86458 13.5642 8.55469 13.5642C9.25781 13.5642 9.90234 13.4405 10.4883 13.1931C11.0742 12.9457 11.6146 12.5746 12.1094 12.0798C12.5911 11.5981 12.9525 11.0642 13.1934 10.4783C13.4342 9.89233 13.5547 9.25431 13.5547 8.56421ZM19.2969 17.822C19.2969 18.0173 19.2611 18.1996 19.1895 18.3689C19.1178 18.5382 19.0104 18.6944 18.8672 18.8376C18.737 18.9679 18.584 19.072 18.4082 19.1501C18.2324 19.2283 18.0469 19.2673 17.8516 19.2673C17.6562 19.2673 17.474 19.2315 17.3047 19.1599C17.1354 19.0883 16.9792 18.9809 16.8359 18.8376L13.0078 15.0095C12.3438 15.4783 11.6406 15.8298 10.8984 16.0642C10.1562 16.2986 9.375 16.4158 8.55469 16.4158C8.03385 16.4158 7.51953 16.3669 7.01172 16.2693C6.50391 16.1716 6.0026 16.0121 5.50781 15.7908C5.02604 15.5824 4.57682 15.3383 4.16016 15.0583C3.74349 14.7784 3.35938 14.4626 3.00781 14.1111C2.65625 13.7595 2.34375 13.3787 2.07031 12.9685C1.79688 12.5583 1.54948 12.1059 1.32812 11.6111C1.13281 11.1293 0.979818 10.6345 0.869141 10.1267C0.758464 9.6189 0.703125 9.09806 0.703125 8.56421C0.703125 8.01733 0.758464 7.48999 0.869141 6.98218C0.979818 6.47437 1.13281 5.98608 1.32812 5.51733C1.53646 5.03556 1.7806 4.57983 2.06055 4.15015C2.34049 3.72046 2.65625 3.32983 3.00781 2.97827C3.35938 2.62671 3.74023 2.31421 4.15039 2.04077C4.56055 1.76733 5.01302 1.51994 5.50781 1.29858C5.98958 1.10327 6.48438 0.956787 6.99219 0.859131C7.5 0.761475 8.02083 0.712646 8.55469 0.712646C9.10156 0.712646 9.62891 0.761475 10.1367 0.859131C10.6445 0.956787 11.1458 1.10327 11.6406 1.29858C12.1094 1.50692 12.5553 1.75106 12.9785 2.03101C13.4017 2.31095 13.7891 2.62671 14.1406 2.97827C14.4922 3.32983 14.8047 3.7172 15.0781 4.14038C15.3516 4.56356 15.599 5.02254 15.8203 5.51733C16.0156 5.98608 16.1686 6.47437 16.2793 6.98218C16.39 7.48999 16.4453 8.01733 16.4453 8.56421C16.4453 9.38452 16.3281 10.1658 16.0938 10.908C15.8594 11.6501 15.5078 12.3533 15.0391 13.0173L18.8672 16.8455C18.9974 16.9757 19.1016 17.1222 19.1797 17.2849C19.2578 17.4477 19.2969 17.6267 19.2969 17.822Z"
                    fill="white" />
                </svg>
                <span class="text-[.5rem] font-medium text-white"
                  >Найти туры</span
                >
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <div
      v-if="touristsSelectOpen"
      class="absolute inset-0 z-[1000] bg-black/30"
      @click="touristsSelectOpen = !touristsSelectOpen">
      <div
        @click.stop
        class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border bg-white p-3">
        <span class="select-none text-[.8em] font-medium text-[#2B3F5A]"
          >Выберите количество туристов</span
        >
        <ul>
          <li
            v-for="(tourist, idx) in tourists"
            :key="idx"
            :class="
              idx + 1 !== tourists.length
                ? 'select-none border-b-2 border-solid border-b-[#f4f2f2]'
                : ''
            "
            class="flex items-center justify-between py-2">
            <div class="flex flex-col">
              <span class="text-[.7em] font-medium text-[#2B3F5A]">{{
                tourist.title
              }}</span>
              <span class="text-[.7em] text-[#AAB2BD]">{{
                tourist.subtitle
              }}</span>
            </div>
            <div class="flex flex-row flex-nowrap items-center">
              <button
                :class="
                  idx === 0
                    ? tourist.count > 1
                      ? 'bg-[#F28119]'
                      : 'bg-[#a8a7a7]'
                    : tourist.count > 0
                      ? 'bg-[#F28119]'
                      : 'bg-[#a8a7a7]'
                "
                class="flex h-5 w-5 items-center justify-center rounded-full text-base font-bold text-white"
                @click="
                  idx === 0
                    ? tourist.count > 1
                      ? tourists[idx].count--
                      : ''
                    : tourist.count > 0
                      ? tourists[idx].count--
                      : ''
                ">
                -
              </button>
              <span
                class="w-8 text-center text-sm font-medium md:w-12 md:text-base"
                >{{ tourist.count }}</span
              >
              <button
                class="flex h-5 w-5 items-center justify-center rounded-full bg-[#F28119] text-base font-bold text-white"
                @click="tourists[idx].count++">
                +
              </button>
            </div>
          </li>
          <li>
            <button
              class="rounded-md bg-[#1EC0CA] px-4 py-1 text-[.7em] font-medium text-white transition-all duration-100 hover:bg-[#1EC0CA]/70"
              @click="touristsSelectOpen = !touristsSelectOpen">
              Закрыть
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- Home end -->

    <!-- Tours -->
    <section id="tours" class="flex flex-col gap-5 bg-white py-8">
      <div>
        <Container>
          <h2
            class="font-roboto text-start text-[1.2em] font-[500] text-[#282828]">
            Горящие туры
          </h2>
        </Container>
      </div>

      <div class="relative">
        <swiper
          :breakpoints="{
            '640': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
            '1024': {
              slidesPerView: 4,
            },
            '1280': {
              slidesPerView: 5,
            },
            '1536': {
              slidesPerView: 6,
            },
          }"
          :initialSlide="1"
          :loop="true"
          :slidesPerView="1"
          :spaceBetween="10"
          class="mySwiper"
          style="overflow: visible !important">
          <swiper-slide v-for="(tour, idx) in tours" :key="idx">
            <div
              class="font-source-sans-pro relative cursor-w-resize overflow-hidden rounded-[12px] border-2 border-solid border-[#F3F3F3]">
              <div class="absolute left-[1em] top-0 grid place-items-center">
                <img alt="" src="@/assets/images/discount-icon.svg" />
                <span
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[.5em] text-white"
                  >{{ tour.discount }}</span
                >
              </div>
              <img
                :src="tour.img"
                alt=""
                class="pointer-events-none h-[7em] w-full select-none object-cover" />
              <div class="flex h-[8em] min-h-fit flex-col gap-1 p-2">
                <div class="flex items-center gap-2">
                  <img alt="" src="@/assets/images/fly.svg" />
                  <div class="text-[.5em] text-light-blue">
                    Вылет из Алматы -
                    <span class="text-orange">{{ tour.date }}</span>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col justify-between">
                  <div class="text-[.7em] font-medium">
                    <span>{{ tour.to }} {{ tour.from }}</span>
                  </div>
                  <div class="flex items-end justify-between">
                    <div
                      class="flex flex-col text-[.65em] font-medium text-[#282828]">
                      <span class="text-[.55rem] text-[#6F7893] line-through">{{
                        tour.oldPrice
                      }}</span>
                      {{ tour.price }}
                    </div>
                    <!-- todo go to specific tour page -->
                    <button
                      @click=""
                      class="font-source-sans-pro rounded-md bg-orange px-3.5 py-1.5 text-[.5em] font-normal text-white">
                      Забронировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- Tours end -->

    <!-- Lowest prices -->
    <section id="lowestPrices" class="bg-white py-2">
      <Container>
        <div class="flex flex-col gap-2">
          <h2
            class="font-roboto text-start text-[1.2em] font-[500] text-[#282828]">
            Самые низкие цены
          </h2>

          <div
            class="font-montserrat flex flex-wrap items-center gap-1.5 rounded-[15px] bg-[#F4F7FB] p-[10px] xl:flex-nowrap">
            <select
              id="city"
              class="bg-light block w-full rounded-sm border border-gray-300 px-2 py-1.5 text-[.55rem] text-[#5C6672]">
              <option hidden>Город вылета</option>
              <option v-for="city in fromCities">
                {{ city }}
              </option>
            </select>
            <select
              id="city"
              class="bg-light block w-full rounded-sm border border-gray-300 px-2 py-1.5 text-[.55rem] text-[#5C6672]">
              <option hidden>Страна</option>
              <option v-for="country in toCountries">
                {{ country }}
              </option>
            </select>
            <input
              type="date"
              class="bg-light block w-full rounded-sm border border-gray-300 px-2 py-1.5 text-[.55rem] text-[#5C6672]" />
            <div
              class="bg-light flex w-full items-center gap-2 rounded-sm border border-gray-300 bg-white px-2 py-1.5 text-[.55rem] text-[#5C6672]">
              <span class="leading-[18px]">Отель</span>
              <div class="flex items-center gap-[2px]">
                <button @click="hotel = 1">
                  <img
                    :class="`${hotel < 1 ? 'opacity-0' : ''}`"
                    alt=""
                    src="@/assets/images/star.svg" />
                </button>
                <img alt="" src="@/assets/images/line.svg" />
                <button @click="hotel = 2">
                  <img
                    :class="`${hotel < 2 ? 'opacity-0' : ''}`"
                    alt=""
                    src="@/assets/images/star.svg" />
                </button>
                <img alt="" src="@/assets/images/line.svg" />
                <button @click="hotel = 3">
                  <img
                    :class="`${hotel < 3 ? 'opacity-0' : ''}`"
                    alt=""
                    src="@/assets/images/star.svg" />
                </button>
                <img alt="" src="@/assets/images/line.svg" />
                <button @click="hotel = 4">
                  <img
                    :class="`${hotel < 4 ? 'opacity-0' : ''}`"
                    alt=""
                    src="@/assets/images/star.svg" />
                </button>
                <img alt="" src="@/assets/images/line.svg" />
                <button @click="hotel = 5">
                  <img
                    :class="`${hotel < 5 ? 'opacity-0' : ''}`"
                    alt=""
                    src="@/assets/images/star.svg" />
                </button>
              </div>
            </div>
            <input
              v-model="maskedValue"
              v-maska="bindedObject"
              class="block w-full rounded-[3px] border border-gray-300 bg-white px-[10px] py-[9px] text-[13px] text-[#5C6672] placeholder-[#5C6672] sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full"
              data-maska="9 99#"
              data-maska-reversed
              data-maska-tokens="9:[0-9]:repeated"
              placeholder="Бюджет (РУБ)"
              type="text" />
            <button
              class="flex h-[38px] w-full items-center justify-between rounded-[3px] border border-gray-300 bg-[#fff] px-[10px] py-[9px] text-[13px] text-[#5C6672] sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full">
              <span>Показать фильтры</span>
              <img alt="" src="@/assets/images/filter-icon.svg" />
            </button>
          </div>

          <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div
              v-for="(item, idx) in lowest"
              :key="idx"
              class="font-montserrat relative w-full cursor-pointer overflow-hidden rounded-[15px] bg-white p-[14px] shadow-[0px_10px_25px_0px_rgba(43,63,90,0.07)] transition-all hover:scale-[102.5%] hover:shadow-xl"
              @click="$router.push({ name: 'tour', params: { id: idx } })">
              <img
                :src="item.img"
                alt=""
                class="mb-[17px] h-[154px] w-full rounded-[10px] object-cover" />
              <h3 class="mb-[7px] text-[15px] font-[700]">
                {{ item.country }}
              </h3>
              <p class="mb-[7px] text-[14px] font-[500] text-[#808C9C]">
                {{ item.from }}
              </p>
              <p
                class="mb-[5px] inline-flex gap-[7px] rounded-full bg-[#EEF2F8] px-[10px] py-[7px] text-[13px] font-[400] text-[#333333]">
                <img alt="" src="@/assets/images/date-icon.svg" />
                {{ item.date }}
              </p>
              <br />
              <p
                class="inline-flex gap-[7px] rounded-full bg-[#EEF2F8] px-[10px] py-[7px] text-[13px] font-[400] text-[#333333]">
                <img alt="" src="@/assets/images/time-icon.svg" />
                {{ item.time }}
              </p>
              <div
                class="absolute bottom-0 right-0 flex items-center gap-[4px] rounded-[15px_0_0_0] bg-orange px-[15px] font-[600] text-white">
                <span class="text-[16px] leading-[30px]">{{ item.price }}</span>
                <span class="text-[9px]">руб</span>
              </div>
            </div>
          </div>

          <!-- Show more -->
          <div class="flex items-center gap-[14px] pb-[20px]">
            <div class="h-[1px] w-full bg-[#DDDDDD]"></div>
            <button
              class="font-montserrat h-[30px] shrink-0 rounded-full border border-solid border-[#DDDDDD] bg-[#EFEFEF] px-[31px] text-[10px] font-[400] uppercase">
              Показать все
            </button>
            <div class="h-[1px] w-full bg-[#DDDDDD]"></div>
          </div>
          <!-- Show more end -->
        </div>
      </Container>
    </section>
    <!-- Lowest prices end -->
  </div>
  <button
    :class="showScrollToTopButton ? 'block' : 'hidden'"
    class="fixed bottom-6 right-6 z-[10] cursor-pointer rounded-md bg-[#1EC0CA]/70 backdrop-blur-md sm:bottom-10 sm:right-10"
    @click="scrollToTop">
    <i class="bi bi-arrow-up grid h-7 w-7 place-items-center text-white"></i>
  </button>
</template>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: none;
}
</style>
