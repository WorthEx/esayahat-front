import "./assets/main.css";

import {createApp} from "vue";
import App from "./App.vue";
import axios from "axios";
import components from "./components/UI";
import router from "@/router/router.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import constants from "@/constants.js";
import VueAxios from "vue-axios";
import {createStore} from "vuex";

const apiInstance = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		'Content-Type': 'application/json',
		'Authorization':
			localStorage.getItem(constants.accessToken) != null ?
				`Bearer ${localStorage.getItem(constants.accessToken)}`
				: ''
	}
});

const store = createStore({
	state: {
		count: 0
	},
	mutations: {
		// for direct state mutating
		increment(state, mutationText) {
			console.log(mutationText);
		}
	},
	actions: {
		//for async operations
		incrementAction({commit}, actionText) {
			commit("increment", actionText);
		}
	}
})

const app = createApp(App)
	.use(store)
	.use(VueAxios, axios)
	.use(router)

app.config.globalProperties.$axios = apiInstance;

components.forEach((component) => {
	app.component(component.name, component);
});
app.component("font-awesome-icon", FontAwesomeIcon);


app.mount("#app");
