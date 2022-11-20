import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/main.scss";

import i18n from "./utils/i18n";

import PButton from "@/components/PButton/PButton.vue";
import PCard from "@/components/PCard/PCard.vue";
import PInput from "@/components/PInput/PInput.vue";
import PTab from "@/components/PTab/PTab.vue";

createApp(App)
  .component("app-p-button", PButton)
  .component("app-p-card", PCard)
  .component("app-p-input", PInput)
  .component("app-p-tab", PTab)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
