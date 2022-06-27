import "@fortawesome/fontawesome-free/css/all.css";

import { key, store } from "@/store";

import App from "./App.vue";
import { createApp } from "vue";
import router from "@/router";

createApp(App).use(router).use(store, key).mount("#app");
