import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import DarkToggle from "./components/DarkToggle.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import MyPreset from "./mypreset";

const app = createApp(App);
app.component("InputText", InputText);
app.component("DarkToggle", DarkToggle);
app.use(PrimeVue, { unstyled: true, pt: MyPreset });
app.mount("#app");
