import "./assets/main.css";

import {createApp} from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import components from "./components/UI";
import {createPinia} from "pinia";
import router from "@/router/router.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const app = createApp(App).use(VueAxios, axios).use(router).use(createPinia());

components.forEach((component) => {
	app.component(component.name, component);
});
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
