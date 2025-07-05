<template>
  <div>
    <HeroSection class="section-position" data-aos="fade-up"/>
    <FeatureSection class="section-position" data-aos="fade-up" data-aos-delay="100"/>
    <DownloadSection class="section-position" data-aos="fade-up" data-aos-delay="200"/>
    <ProjectSection class="section-position" data-aos="fade-up" data-aos-delay="300"/>
    <ContactSection data-aos="fade-up" data-aos-delay="500"/>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import HeroSection from '../sections/HeroSection.vue';
import FeatureSection from '../sections/FeatureSection.vue';
import DownloadSection from '../sections/DownloadSection.vue';
import ProjectSection from '../sections/ProjectsSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import { useLanguageStore } from '../stores/useLanguageStore';

  
const langStore = useLanguageStore();


watch(() => langStore.selectedLanguage, (newLanguage) => {
  console.log('Idioma mudou para:', langStore.selectedLanguage);
});

onMounted(() => {
  console.log("SELECTED IN MAIN", langStore.selectedLanguage);       
});

</script>

<style scoped>
 .section-position {
  margin-bottom: 150px;
 }

</style>