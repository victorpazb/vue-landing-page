import { createApp } from "vue";
import { createPinia } from 'pinia';
import "./assets/style.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';



import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

let app = createApp(App);

app.use(VueSmoothScroll);

app.component("Button", Button);
app.component("LinkButton", LinkButton);

AOS.init();

app.use(createPinia());
app.mount("#app");
