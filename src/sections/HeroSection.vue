

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">VICTOR PAZ BRAGA</h1>
                <h4 class="lg:text-lg mt-none font-theme-content text-theme-grayish-blue text-center lg:text-left"><span  v-for="(title, index) in content.titles[selectedLang]">{{ title + (index < content.titles[selectedLang].length - 1 ? ' | ' :  '') }}</span></h4>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">{{ content.description[selectedLang] }}</p>
                <div class="flex justify-center lg:justify-start mt-10">
                    
                    <a href="https://www.linkedin.com/in/victorpazbraga" target="_blank" class="mr-2 flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M3.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 2.5h3V14H3.5V5.5zM8 5.5h3v2h.042a3.125 3.125 0 0 1 2.583-1.417c2.76 0 3.262 1.821 3.262 4.189V14h-3v-4.5c0-1.067-.042-2.408-1.633-2.408-1.634 0-1.884 1.181-1.884 2.408V14H8V5.5z"/>
                        </svg>
                    </a>


                    <a href="https://github.com/victorpazb" target="_blank" class="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 0 0-2.535 15.615c.4.074.548-.174.548-.388v-1.414c-2.223.493-2.689-1.072-2.689-1.072-.362-.92-.884-1.166-.884-1.166-.724-.494.055-.484.055-.484.8.056 1.223.824 1.223.824.712 1.211 1.87.862 2.322.661.072-.516.278-.86.506-1.06-1.776-.201-3.637-.887-3.637-3.953 0-.872.31-1.583.822-2.142-.082-.201-.356-1.014.078-2.11 0 0 .68-.22 2.227.84.648-.18 1.345-.268 2.037-.271.693.003 1.39.091 2.038.271 1.546-1.06 2.227-.84 2.227-.84.434 1.097.161 1.91.079 2.11.512.559.822 1.27.822 2.142 0 3.071-1.864 3.749-3.647 3.944.285.245.544.729.544 1.473v2.188c0 .215.146.464.55.386A8 8 0 0 0 8 0z"/>
                        </svg>
                     </a>

                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-20">
                <img class="z-10 ml-40 mb--10" src="/images/PHOTO_EDIT.png" />
                <div class="-z-10 mb-8 mr-none bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
<script setup>

import { useLanguageStore } from '../stores/useLanguageStore';
import { ref, computed } from 'vue';

const langStore = useLanguageStore();

const selectedLang = computed(() => {
        return langStore.selectedLanguage == 'en' ? 'en' : 'pt';
});

const content = ref({
    titles: {
        pt: ['Cientista da computação', 'Desenvolvedor de Software Fullstack'],
        en: [ 'Computer Scientist', 'Fullstack software developer'],
    },
    description : { 
        pt: 'Sou um estudante de Engenharia de Software em Ciência da Computação no Brasil, com previsão de formatura em outubro de 2024. Minha carreira começou como Estagiário de Frontend, onde desenvolvi habilidades fundamentais, e desde então transitei para o desenvolvimento full‐stack. Atualmente, trabalho como Desenvolvedor de Software Júnior, focado em criar interfaces amigáveis e APIs REST eficientes usando Vue.js, Quasar, TypeScript, Node.js e MongoDB. Sou dedicado a ser um membro de equipe colaborativo, cumprir objetivos e manter uma atitude positiva.',
        en: 'I am a Brazilian software engineering undergraduate in Computer Science, set to graduate in October 2024. My career started as a Frontend Intern, where I built foundational skills, and I have since transitioned to full‐stack development. Currently, I work as a Junior Software Developer, focusing on creating user‐friendly interfaces and efficient REST APIs using Vue.js, Quasar, TypeScript, Node.js, and MongoDB. I am dedicated to being a supportive team member, meeting objectives, and maintaining a positive attitude.',
    }
});


</script>

<style scoped>

</style>