<script setup>

import projects from '../data/features.js';
import { ref, computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';

const langStore = useLanguageStore();
const selectedLang = computed(() => {
        return langStore.selectedLanguage == 'en' ? 'en' : 'pt';
});

const content = ref({
    title: {
        en: 'Projects',
        pt: 'Projetos'
    },
    description: {
       en: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
       pt: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.', 
    }
});

</script>

<template>
    <!-- Features Section Start -->
    <div id="projects" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ content.title[selectedLang] }}</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">{{ content.description[selectedLang] }}</p>
            </div>      
        </section>
    </div>
    <!-- Features Section End -->
</template>
