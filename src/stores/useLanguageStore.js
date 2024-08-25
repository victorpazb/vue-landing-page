import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    selectedLanguage: 'pt',
  }),
  actions: {
    setLanguage(lang) {
      this.selectedLanguage = lang;
      localStorage.setItem('language', lang);  
    }
  }
});
