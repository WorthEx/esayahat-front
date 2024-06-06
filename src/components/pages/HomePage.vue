<script>
import { vMaska } from "maska";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import toursImg1 from '@/assets/images/tour_card_1.png'
import toursImg2 from '@/assets/images/tour_card_2.png'
import toursImg3 from '@/assets/images/tour_card_3.png'
import toursImg4 from '@/assets/images/tour_card_4.png'
import toursImg5 from '@/assets/images/tour_card_5.png'
import toursImg6 from '@/assets/images/tour_card_6.png'
import toursImg7 from '@/assets/images/tour_card_7.png'

import lowestImg1 from '@/assets/images/lowest_card_1.png'
import lowestImg2 from '@/assets/images/lowest_card_2.png'
import lowestImg3 from '@/assets/images/lowest_card_3.png'
import lowestImg4 from '@/assets/images/lowest_card_4.png'
import lowestImg5 from '@/assets/images/lowest_card_5.png'
import lowestImg6 from '@/assets/images/lowest_card_6.png'
import lowestImg7 from '@/assets/images/lowest_card_7.png'
import lowestImg8 from '@/assets/images/lowest_card_8.png'
import lowestImg9 from '@/assets/images/lowest_card_9.png'
import lowestImg10 from '@/assets/images/lowest_card_10.png'
import lowestImg11 from '@/assets/images/lowest_card_11.png'
import lowestImg12 from '@/assets/images/lowest_card_12.png'

export default {
    name: "HomePage",
    directives: { maska: vMaska },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {};
    },
    data () {
        return {
            maskedValue: this.money,
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
            tours: [
                {
                    discount: '-51%',
                    date: '28.05.2024',
                    to: 'Горящие туры в Турцию из',
                    from: 'Алматы',
                    oldPrice: '1 439 097〒',
                    price: '953 284〒',
                    img: toursImg1,
                },
                {
                    discount: '-47%',
                    date: '28.05.2024',
                    to: 'Горящие туры на',
                    from: 'Мальдивы из Алматы',
                    oldPrice: '1 140 134〒',
                    price: '778 150〒',
                    img: toursImg2,
                },
                {
                    discount: '-14%',
                    date: '14.08.2024',
                    to: 'Горящие туры в Турцию из',
                    from: 'Астаны',
                    oldPrice: '991 958〒',
                    price: '867 479〒',
                    img: toursImg3,
                },
                {
                    discount: '-24%',
                    date: '24.05.2024',
                    to: 'Горящие туры в Египет из',
                    from: 'Алматы',
                    oldPrice: '906 504〒',
                    price: '730 541〒',
                    img: toursImg4,
                },
                {
                    discount: '-7%',
                    date: '25.05.2024',
                    to: 'Горящие туры в Тайланд',
                    from: 'из Астаны',
                    oldPrice: '1 734 064〒',
                    price: '1 617 969〒',
                    img: toursImg5,
                },
                {
                    discount: '-6%',
                    date: '25.05.2024',
                    to: 'Горящие туры во Вьетнам',
                    from: 'из Алматы',
                    oldPrice: '996 486〒',
                    price: '939 546〒',
                    img: toursImg6,
                },
                {
                    discount: '-6%',
                    date: '25.05.2024',
                    to: 'Горящие туры в Турцию из',
                    from: 'Алматы',
                    oldPrice: '1 439 097〒',
                    price: '953 284〒',
                    img: toursImg7,
                },
            ],
            lowest: [
                {
                    country: 'Абхазия',
                    from: 'из Москвы',
                    date: '29 Мая',
                    time: '7 ночей',
                    price: '10 942',
                    img: lowestImg1
                },
                {
                    country: 'Россия',
                    from: 'из Москвы',
                    date: '29 Мая',
                    time: '6 ночей',
                    price: '11 035',
                    img: lowestImg2
                },
                {
                    country: 'Красная Поляна',
                    from: 'Россия из Москвы',
                    date: '29 Мая',
                    time: '6 ночей',
                    price: '13 316',
                    img: lowestImg3
                },
                {
                    country: 'Турция',
                    from: 'из Москвы',
                    date: '24 Мая',
                    time: '7 ночей',
                    price: '23 248',
                    img: lowestImg4
                },
                {
                    country: 'Катар',
                    from: 'из Москвы',
                    date: '31 Мая',
                    time: '7 ночей',
                    price: '25 841',
                    img: lowestImg5
                },
                {
                    country: 'Мармарис',
                    from: 'Турция из Москвы',
                    date: '24 Мая',
                    time: '6 ночей',
                    price: '28 567',
                    img: lowestImg6
                },
                {
                    country: 'ОАЭ',
                    from: 'из Москвы',
                    date: '27 Мая',
                    time: '6 ночей',
                    price: '29 379',
                    img: lowestImg7
                },
                {
                    country: 'Шарджа',
                    from: 'ОАЭ из Москвы',
                    date: '23 Мая',
                    time: '6 ночей',
                    price: '29 705',
                    img: lowestImg8
                },
                {
                    country: 'Бахрейн',
                    from: 'из Москвы',
                    date: '31 Мая',
                    time: '7 ночей',
                    price: '36 131',
                    img: lowestImg9
                },
                {
                    country: 'Египет',
                    from: 'из Москвы',
                    date: '24 Мая',
                    time: '6 ночей',
                    price: '37 732',
                    img: lowestImg10
                },
                {
                    country: 'Хургада',
                    from: 'Египет из Москвы',
                    date: '27 Мая',
                    time: '6 ночей',
                    price: '42 877',
                    img: lowestImg11
                },
                {
                    country: 'Армения',
                    from: 'из Москвы',
                    date: '29 Мая',
                    time: '6 ночей',
                    price: '44 372',
                    img: lowestImg12
                },
            ],
            dateValue: '',
            dateValue2: '',
            hotel: 1,
            radio: 1,
            radioList: ['Туры с перелетом', 'Отели', 'Авиабилеты'],
            touristsSelectOpen: false,
            tourists: [
                {
                    title: "Взрослые",
                    subtitle: "Старше 12 лет",
                    count: 0,
                },
                {
                    title: "Дети",
                    subtitle: "От 2 до 12 лет",
                    count: 0,
                },
                {
                    title: "Младенцы",
                    subtitle: "До 2 лет, без места",
                    count: 0,
                },
            ],
        }
    },
    computed: {
        lengthTourits () {
            let text = false;
            this.tourists.forEach((item, i) => {
                if (item.count != 0) {
                    text = true;
                }
            });
            return text
        },
        nightsList () {
            let arr = [];
            for (let i = 2; i<=15; i++){
                arr.push(`${i}-${i*2}`);
            }
            return arr;
        }
    }
}
</script>

<template>
    <div class="w-full overflow-hidden">
        <!-- Home -->
        <section class="relative z-[2] mb-[50px] lg:mb-[67px]">
            <img src="@/assets/images/home-background.png" class="absolute z-[-1] top-0 left-0 w-full h-full object-cover object-[center_top]" alt="">
            <div class="max-w-[calc(100%_-_40px)] lg:max-w-[calc(100%_-_100px)] xl:max-w-[1124px] pt-[100px] md:pt-[150px] lg:pt-[200px] xl:pt-[238px] pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[152px] mx-auto">
                <div class="relative">
                    <h1 class="font-roboto text-white text-[42px] md:text-[72px] xl:text-[96px] font-bold mb-[30px] pb-[90px] md:pb-0">Откройте Мир с <br> STUAIR</h1>
                    <div class="absolute w-full md:w-auto right-0 bottom-0">
                        <input
                            type="text"
                            placeholder="Поиск туров и курортов"
                            class="bg-white h-[60px] w-full md:w-[360px] rounded-full font-roboto text-[18px] font-[400] text-[#7E7E7E] ps-[42px] pe-[72px]"
                        >
                        <button class="absolute right-[8px] top-[6px] bg-[#1EC0CA] rounded-full w-[48px] h-[48px] flex items-center justify-center">
                            <img src="@/assets/images/search.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class=" pt-5 px-[20px] lg:px-[30px] pb-[26px] bg-[#1EC0CA] rounded-[20px]">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-6 mb-5 text-white font-roboto text-[13px] font-medium">
                        <button
                            v-for="(item, i) in radioList"
                            :key="i"
                            @click="radio = i+1"
                            class="flex items-center gap-[10px]"
                        >
                            <span class="w-4 h-4 shrink-0 bg-white rounded-full flex items-center justify-center">
                                <span
                                    class="w-2 h-2 shrink-0 rounded-full bg-[#027AD0]"
                                    :class="radio != i+1 ? 'hidden' : ''"
                                ></span>
                            </span>
                            <span class="text-left">{{ item }}</span>
                        </button>
                    </div>
                    <div class="bg-white py-[10px] px-[15px] rounded-[15px] mb-[20px] font-roboto flex flex-wrap xl:flex-nowrap gap-[10px] xl:gap-0 items-start justify-between">

                        <div class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[179px] shrink-0">
                            <label for="" class="text-[13px] font-medium text-[#AAB2BD] mb-2 block">Город вылета</label>
                            <select class="w-full bg-transparent leading-5 text-base font-bold text-[#2B3F5A] block ">
                                <option selected>Москва</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>

                        <div class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[167px] shrink-0">
                            <label for="" class="text-[13px] font-medium text-[#AAB2BD] mb-2 block">Страна</label>
                            <select class="w-full bg-transparent leading-5 text-base font-bold text-[#2B3F5A] block ">
                                <option selected>Турция</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>

                        <div class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[147px] shrink-0">
                            <label for="" class="text-[13px] font-medium text-[#AAB2BD] mb-2 block">Даты вылета</label>
                            <vue-tailwind-datepicker
                                v-model="dateValue"
                                placeholder="Select"
                                :formatter="{date: 'DD MMM', month: 'MMM'}"
                                :shortcuts="false"
                                v-slot="{ value, placeholder }"
                                separator=" - "
                                as-single
                                use-range
                                inputClasses="text-[13px] h-[38px] px-[10px] border border-gray-300 text-[#5C6672] placeholder-[#5C6672] rounded-[3px]"
                            >
                                <div class="flex">
                                <div class="flex-1">
                                    <button
                                        type="button"
                                        class="text-base font-bold text-[#2B3F5A]"
                                    >
                                        <span v-if="value" class="">{{ value }}</span>
                                        <span v-else>{{ placeholder }}</span>
                                    </button>
                                </div>
                            </div>
                            </vue-tailwind-datepicker>
                        </div>

                        <div class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[95px] shrink-0">
                            <label for="" class="text-[13px] font-medium text-[#AAB2BD] mb-2 block">Ночей</label>
                            <select class="w-full bg-transparent leading-5 text-base font-bold text-[#2B3F5A] block ">
                                <option
                                    v-for="(item, i) in nightsList"
                                    :key="i"
                                    :selected="i == 0"
                                    :value="item"
                                >{{ item }}</option>
                            </select>
                        </div>
                        
                        <div class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[167px] shrink-0">
                            <label for="" class="text-[13px] font-medium text-[#AAB2BD] mb-2 block">Туристы</label>
                            <div class="relative">
                                <button @click="touristsSelectOpen = !touristsSelectOpen" class="w-full text-left bg-transparent leading-5 text-base font-bold text-[#2B3F5A]">
                                    <span v-if="lengthTourits" class="flex gap-1 flex-wrap">
                                        <span
                                            v-for="(item, i) in tourists"
                                            :key="i"
                                        >
                                            <span v-if="item.count != 0">
                                                {{item.count}} {{item.title.toLowerCase()}}
                                            </span>
                                        </span>
                                    </span>
                                    <span v-else>Select</span>
                                </button>
                                <div v-if="touristsSelectOpen" class="absolute translate-y-full -left-3 -bottom-2 bg-white border rounded-md p-3 w-[350px] md:w-[400px] shadow-xl">
                                    <ul>
                                        <li
                                            v-for="(item, i) in tourists"
                                            :key="i"
                                            class="flex justify-between items-center py-2"
                                            :class="i+1 != tourists.length ? 'border-b-[#f4f2f2] border-b border-solid' : ''"
                                        >
                                            <div class="flex flex-col">
                                                <span class="text-sm md:text-base text-[#2B3F5A] font-medium">{{ item.title }}</span>
                                                <span class="text-sm md:text-base text-[#AAB2BD]">{{ item.subtitle }}</span>
                                            </div>
                                            <div class="flex items-center">
                                                <button
                                                    @click="item.count != 0 ? tourists[i].count-- : ''"
                                                    class="w-5 h-5 text-base font-bold text-white rounded-full flex items-center justify-center"
                                                    :class="item.count == 0 ? 'bg-[#a8a7a7]' : 'bg-red-500'"
                                                >-</button>
                                                <span class="text-sm md:text-base font-medium text-center w-8 md:w-12">{{ item.count }}</span>
                                                <button
                                                    @click="tourists[i].count++"
                                                    class="w-5 h-5 text-base font-bold text-white bg-red-500 rounded-full flex items-center justify-center"
                                                >+</button>
                                            </div>
                                        </li>
                                        <li class="pt-2">
                                            <button
                                                @click="touristsSelectOpen = !touristsSelectOpen"
                                                class="bg-[#1EC0CA] px-4 py-1 text-base font-medium rounded-md text-white"
                                            >Close</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button class="w-full md:w-[calc(50%_-_5px)] lg:w-[calc(100%_/_3_-_10px_*_2_/_3)] xl:w-[162px] shrink-0 bg-[#F28119] rounded-[7px] flex items-center justify-center h-[52px] gap-4 font-roboto">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5547 8.56421C13.5547 7.86108 13.4375 7.21655 13.2031 6.63062C12.9688 6.04468 12.6042 5.50431 12.1094 5.00952C11.6276 4.52775 11.0905 4.16642 10.498 3.92554C9.9056 3.68465 9.25781 3.56421 8.55469 3.56421C7.8776 3.56421 7.24609 3.6814 6.66016 3.91577C6.07422 4.15015 5.53385 4.51473 5.03906 5.00952C4.55729 5.49129 4.18945 6.0284 3.93555 6.62085C3.68164 7.2133 3.55469 7.86108 3.55469 8.56421C3.55469 9.24129 3.67839 9.8728 3.92578 10.4587C4.17318 11.0447 4.54427 11.585 5.03906 12.0798C5.52083 12.5616 6.05469 12.9294 6.64062 13.1833C7.22656 13.4373 7.86458 13.5642 8.55469 13.5642C9.25781 13.5642 9.90234 13.4405 10.4883 13.1931C11.0742 12.9457 11.6146 12.5746 12.1094 12.0798C12.5911 11.5981 12.9525 11.0642 13.1934 10.4783C13.4342 9.89233 13.5547 9.25431 13.5547 8.56421ZM19.2969 17.822C19.2969 18.0173 19.2611 18.1996 19.1895 18.3689C19.1178 18.5382 19.0104 18.6944 18.8672 18.8376C18.737 18.9679 18.584 19.072 18.4082 19.1501C18.2324 19.2283 18.0469 19.2673 17.8516 19.2673C17.6562 19.2673 17.474 19.2315 17.3047 19.1599C17.1354 19.0883 16.9792 18.9809 16.8359 18.8376L13.0078 15.0095C12.3438 15.4783 11.6406 15.8298 10.8984 16.0642C10.1562 16.2986 9.375 16.4158 8.55469 16.4158C8.03385 16.4158 7.51953 16.3669 7.01172 16.2693C6.50391 16.1716 6.0026 16.0121 5.50781 15.7908C5.02604 15.5824 4.57682 15.3383 4.16016 15.0583C3.74349 14.7784 3.35938 14.4626 3.00781 14.1111C2.65625 13.7595 2.34375 13.3787 2.07031 12.9685C1.79688 12.5583 1.54948 12.1059 1.32812 11.6111C1.13281 11.1293 0.979818 10.6345 0.869141 10.1267C0.758464 9.6189 0.703125 9.09806 0.703125 8.56421C0.703125 8.01733 0.758464 7.48999 0.869141 6.98218C0.979818 6.47437 1.13281 5.98608 1.32812 5.51733C1.53646 5.03556 1.7806 4.57983 2.06055 4.15015C2.34049 3.72046 2.65625 3.32983 3.00781 2.97827C3.35938 2.62671 3.74023 2.31421 4.15039 2.04077C4.56055 1.76733 5.01302 1.51994 5.50781 1.29858C5.98958 1.10327 6.48438 0.956787 6.99219 0.859131C7.5 0.761475 8.02083 0.712646 8.55469 0.712646C9.10156 0.712646 9.62891 0.761475 10.1367 0.859131C10.6445 0.956787 11.1458 1.10327 11.6406 1.29858C12.1094 1.50692 12.5553 1.75106 12.9785 2.03101C13.4017 2.31095 13.7891 2.62671 14.1406 2.97827C14.4922 3.32983 14.8047 3.7172 15.0781 4.14038C15.3516 4.56356 15.599 5.02254 15.8203 5.51733C16.0156 5.98608 16.1686 6.47437 16.2793 6.98218C16.39 7.48999 16.4453 8.01733 16.4453 8.56421C16.4453 9.38452 16.3281 10.1658 16.0938 10.908C15.8594 11.6501 15.5078 12.3533 15.0391 13.0173L18.8672 16.8455C18.9974 16.9757 19.1016 17.1222 19.1797 17.2849C19.2578 17.4477 19.2969 17.6267 19.2969 17.822Z" fill="white"/>
                            </svg>
                            <span class="text-[15px] font-bold text-white">Найти туры</span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
        <!-- Home end -->

        <!-- Tours -->
        <section id="tours" class="pb-[50px] lg:pb-[78px]">
            <div class="mb-[30px] lg:mb-[43px] max-w-[calc(100%_-_40px)] lg:max-w-[calc(100%_-_100px)] xl:max-w-[1160px] mx-auto">
                <h2 class="font-roboto text-[36px] font-[500] text-[#282828] leading-[62.4px]">Горящие туры</h2>
            </div>
            <div class="max-w-[calc(100%_-_40px)] lg:max-w-[calc(100%_-_100px)] 2xl:max-w-[1590px] mx-auto relative">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="10"
                    :loop="true"
                    :initialSlide="1"
                    :breakpoints="{
                        '700': {
                            slidesPerView: 2
                        },
                        '1040': {
                            slidesPerView: 3,
                        },
                        '1355': {
                            slidesPerView: 4
                        },
                        '1550': {
                            slidesPerView: 5
                        },

                    }"
                    class="mySwiper"
                    style="overflow: visible !important;"
                >
                    <swiper-slide v-for="(tour, idx) in tours" :key="idx">
                        <div class="relative border-2 border-solid border-[#F3F3F3] rounded-[12px] overflow-hidden font-source-sans-pro">
                            <div class="absolute top-0 left-[25px] z-[1]">
                                <img src="@/assets/images/discount-icon.svg" alt="">
                                <span class="absolute left-[5.16px] top-[9.75px] text-[13px] text-white">{{ tour.discount }}</span>
                            </div>
                            <img :src="tour.img" class="h-[200px] w-full object-cover" alt="">
                            <div class="p-[16px]">
                                <div class="flex items-center gap-[10px] mb-[10.5px]">
                                    <img src="@/assets/images/fly.svg" alt="">
                                    <div class="text-[14px] text-light-blue">Вылет из Алматы - <span class="text-orange">{{ tour.date }}</span></div>
                                </div>
                                <div class="min-h-[94px] mb-[8px] text-[23px] font-[400]">
                                    <div class="">{{ tour.to }}</div>
                                    <div>{{ tour.from }}</div>
                                </div>
                                <div class="flex justify-between items-end">
                                    <div class="flex flex-col text-[#282828] text-[18px] font-[400]">
                                        <span class="mb-[1px] text-[#6F7893] text-[14px] line-through">{{ tour.oldPrice }}</span>
                                        {{ tour.price }}
                                    </div>
                                    <orange-button>Забронировать</orange-button>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <!-- Tours end -->

        <!-- Lowest prices -->
        <section id="country">
            <div class="max-w-[calc(100%_-_40px)] xl:max-w-[1160px] mx-auto">
                <h2 class="text-[#2B3F5A] font-roboto text-[36px] font-[500] leading-[34px] mb-[19px]">Самые низкие цены</h2>

                <div class="bg-[#F4F7FB] p-[10px] rounded-[15px] mb-[20px] font-montserrat flex flex-wrap xl:flex-nowrap items-center gap-[10px]">
                    <select class="w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full bg-light border border-gray-300 text-[#5C6672] text-[13px] rounded-[3px] block px-[10px] py-[9px]">
                        <option hidden>Город вылета</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                    <select class="w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full bg-light border border-gray-300 text-[#5C6672] text-[13px] rounded-[3px] block px-[10px] py-[9px]">
                        <option hidden>Страна</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                    <div class="w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full">
                        <vue-tailwind-datepicker
                            v-model="dateValue2"
                            placeholder="Даты вылета"
                            as-single
                            :formatter="{date: 'DD MMM', month: 'MMM'}"
                            separator=" - "
                            inputClasses="text-[13px] h-[38px] px-[10px] border border-gray-300 text-[#5C6672] placeholder-[#5C6672] rounded-[3px]"
                        />
                    </div>
                    <div class="flex items-center justify-between w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full bg-white border border-gray-300 text-[#5C6672] text-[13px] rounded-[3px] px-[10px] py-[9px]">
                        <span class="leading-[18px]">Отель</span>
                        <div class="flex items-center gap-[2px]">
                            <button @click="hotel = 1">
                                <img src="@/assets/images/star.svg" alt="" :class="`${hotel < 1 ? 'opacity-0' : ''}`">
                            </button>
                            <img src="@/assets/images/line.svg" alt="">
                            <button @click="hotel = 2">
                                <img src="@/assets/images/star.svg" alt="" :class="`${hotel < 2 ? 'opacity-0' : ''}`">
                            </button>
                            <img src="@/assets/images/line.svg" alt="">
                            <button @click="hotel = 3">
                                <img src="@/assets/images/star.svg" alt="" :class="`${hotel < 3 ? 'opacity-0' : ''}`">
                            </button>
                            <img src="@/assets/images/line.svg" alt="">
                            <button @click="hotel = 4">
                                <img src="@/assets/images/star.svg" alt="" :class="`${hotel < 4 ? 'opacity-0' : ''}`">
                            </button>
                            <img src="@/assets/images/line.svg" alt="">
                            <button @click="hotel = 5">
                                <img src="@/assets/images/star.svg" alt="" :class="`${hotel < 5 ? 'opacity-0' : ''}`">
                            </button>
                        </div>
                    </div>
                    <input
                        type="text"
                        v-model="maskedValue"
                        v-maska="bindedObject"
                        data-maska="9 99#"
                        data-maska-tokens="9:[0-9]:repeated"
                        data-maska-reversed
                        placeholder="Бюджет (РУБ)"
                        class="w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full bg-white border border-gray-300 text-[#5C6672] text-[13px] rounded-[3px] block w-full px-[10px] py-[9px] placeholder-[#5C6672]"
                    >
                    <button class="w-full sm:w-[calc(50%_-_5px)] md:w-[calc(100%_/_3_-_20px_/_3)] xl:w-full flex items-center justify-between h-[38px] bg-[#fff] border border-gray-300 text-[#5C6672] text-[13px] rounded-[3px] px-[10px] py-[9px]">
                        <span >Показать фильтры</span>
                        <img src="@/assets/images/filter-icon.svg" alt="">
                    </button>
                </div>

                <div class="flex flex-wrap gap-[20px] pb-[20px]">
                    <div
                        v-for="(item, idx) in lowest"
                        :key="idx"
                        @click="$router.push({name: 'tour', params: {id: idx}})"
                        class="relative cursor-pointer overflow-hidden w-full sm:w-[calc(50%_-_10px)] md:w-[calc(100%_/_3_-_40px_/_3)] lg:w-[calc(25%_-_15px)] shadow-[0px_10px_25px_rgba(43,63,90,0.07)] p-[14px] rounded-[15px] font-montserrat"
                    >
                        <img :src="item.img" alt="" class="w-full h-[154px] object-cover rounded-[10px] mb-[17px]">
                        <h3 class="text-[15px] font-[700] mb-[7px]">{{ item.country }}</h3>
                        <p class="text-[#808C9C] text-[14px] font-[500] mb-[7px]">{{ item.from }}</p>
                        <p class="bg-[#EEF2F8] inline-flex px-[10px] py-[7px] rounded-full text-[#333333] text-[13px] font-[400] gap-[7px] mb-[5px]">
                            <img src="@/assets/images/date-icon.svg" alt="">
                            {{ item.date }}
                        </p>
                        <br>
                        <p class="bg-[#EEF2F8] inline-flex px-[10px] py-[7px] rounded-full text-[#333333] text-[13px] font-[400] gap-[7px]">
                            <img src="@/assets/images/time-icon.svg" alt="">
                            {{ item.time }}
                        </p>
                        <div class="absolute bottom-0 right-0 bg-orange text-white rounded-[15px_0_0_0] flex items-center gap-[4px] font-[600] px-[15px]">
                            <span class="text-[16px] leading-[30px]">{{ item.price }}</span>
                            <span class="text-[9px]">руб</span>
                        </div>
                    </div>
                </div>

                <!-- Show more -->
                <div class="flex items-center gap-[14px] pb-[20px]">
                    <div class="w-full h-[1px] bg-[#DDDDDD]"></div>
                    <button class="shrink-0 border border-solid border-[#DDDDDD] h-[30px] rounded-full font-montserrat text-[10px] font-[400] px-[31px] uppercase bg-[#EFEFEF]">Показать все</button>
                    <div class="w-full h-[1px] bg-[#DDDDDD]"></div>
                </div>
                <!-- Show more end -->
            </div>
        </section>
        <!-- Lowest prices end -->

    </div>
</template>