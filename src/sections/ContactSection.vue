<script setup>

import { ref, computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';

const langStore = useLanguageStore();

let content = ref({
    title: {
        en: 'Social and Contact',
        pt: 'Mídia Social e Contato',
    },
    description: {
        en: 'You can reach me on my LinkedIn, GitHub or Gmail',
        pt: 'Você pode me contactar através do meu LinkedIn, GitHub e Gmail',
    },
});

const selectedLang = computed(() => {
        return langStore.selectedLanguage == 'en' ? 'en' : 'pt';
});

</script>

<template>  
    <!-- Contacts Section Start -->
    <div id="contacts" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ content.title[selectedLang] }}</h2>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-center">{{ content.description[selectedLang] }}</p>
                <div class="flex justify-center lg:justify-center mt-10">
                    
                    <a href="https://www.linkedin.com/in/victorpazbraga" target="_blank" class="m-2 flex items-center justify-center w-20 h-20 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M3.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 2.5h3V14H3.5V5.5zM8 5.5h3v2h.042a3.125 3.125 0 0 1 2.583-1.417c2.76 0 3.262 1.821 3.262 4.189V14h-3v-4.5c0-1.067-.042-2.408-1.633-2.408-1.634 0-1.884 1.181-1.884 2.408V14H8V5.5z"/>
                        </svg>
                    </a>


                    <a href="https://github.com/victorpazb" target="_blank" class="m-2 flex items-center justify-center w-20 h-20 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 0 0-2.535 15.615c.4.074.548-.174.548-.388v-1.414c-2.223.493-2.689-1.072-2.689-1.072-.362-.92-.884-1.166-.884-1.166-.724-.494.055-.484.055-.484.8.056 1.223.824 1.223.824.712 1.211 1.87.862 2.322.661.072-.516.278-.86.506-1.06-1.776-.201-3.637-.887-3.637-3.953 0-.872.31-1.583.822-2.142-.082-.201-.356-1.014.078-2.11 0 0 .68-.22 2.227.84.648-.18 1.345-.268 2.037-.271.693.003 1.39.091 2.038.271 1.546-1.06 2.227-.84 2.227-.84.434 1.097.161 1.91.079 2.11.512.559.822 1.27.822 2.142 0 3.071-1.864 3.749-3.647 3.944.285.245.544.729.544 1.473v2.188c0 .215.146.464.55.386A8 8 0 0 0 8 0z"/>
                        </svg>
                    </a>


                    <a href="#" onclick="alert('EMAIL: victorpazb@gmail.com'); return false;" class="m-2 flex items-center justify-center w-20 h-20 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 1.5L8 8.25 14 5.5V4H2v1.5zM2 6.5L8 10l6-3.5V12H2V6.5z"/>
                        </svg>
                    </a>

                </div>
            </div>      
        </section>
    </div>
    <!-- Features Section End -->
</template>
