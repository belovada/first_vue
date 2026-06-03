import "./styles/styles.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia()).use(router);

router.isReady().then(() => app.mount("#app"));
