import "vite/modulepreload-polyfill";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./main.css";
import "./assets/css/_theme.scss";

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
