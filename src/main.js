import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

// ✅ Create the app first
const app = createApp(App);

// ✅ Use the toast plugin
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
});

// ✅ Mount the app
app.mount('#app');

