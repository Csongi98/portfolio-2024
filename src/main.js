import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import fadeInOnScroll from "./directives/fadeInOnScroll";

const app = createApp(App);
app.directive("fade-in-on-scroll", fadeInOnScroll);
app.mount("#app");
