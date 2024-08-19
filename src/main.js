import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import i18n from './plugins/i18n'
  console.log(localStorage.getItem('lang'));
  const language = localStorage.getItem('lang') || 'en'; // Default to 'en' if not set
  document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');

  createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')