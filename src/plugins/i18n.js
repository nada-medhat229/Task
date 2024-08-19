// src/i18n.js
import { createI18n } from 'vue-i18n';

// Import your translation messages
import en from '../locales/en.json';
import ar from '../locales/ar.json';
const lang=localStorage.getItem('lang');
const messages = {
    en,
    ar
  };
  
const i18n = createI18n({
  locale: lang??'en', // Set default locale
  messages,
});

export default i18n;
