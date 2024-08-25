<script setup>


import { ref, computed, onMounted, watch } from 'vue';
import education from '../data/features.js';
import { useLanguageStore } from '../stores/useLanguageStore';

const langStore = useLanguageStore();
const selectedLang = computed(() => {
        return langStore.selectedLanguage == 'en' ? 'en' : 'pt';
});

const content = ref({
  title: {
    en: 'Education',
    pt: 'Formação',
  },
  description: {
    en: 'I\'m finishing my bachelor\'s degree in Computer Science at the Federal University of Campina Grande (UFCG), one of Brazil\'s most renowned institutions in the field of technology. UFCG is nationally and internationally recognized for its academic excellence and rigorous curriculum, producing highly qualified professionals for the industry.',
    pt: 'Estou concluindo o curso superior de Computação na Universidade Federal de Campina Grande (UFCG), uma das mais renomadas instituições do Brasil na área de tecnologia. A UFCG é reconhecida nacional e internacionalmente pela excelência acadêmica e por seu rigoroso programa de ensino, preparando profissionais altamente qualificados para o mercado.',
  },
  institution: {
    en: 'Federal University of Campina Grande',
    pt: 'UFCG - Universidade Federal de Campina Grande'
  },
  education: {
    en: 'Computer Science',
    pt: 'Ciência da Computação'
  }, 
});

</script>

<template>
    <!-- Features Section Start -->
    <div id="education" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <div class="section text-left">
                  <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ content.title[selectedLang] }}</h2>
                 
                <div class="mr-10 logo_ufcg" style="padding:20px; border-radius: 15px; background-color: white; display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 10px;">
                  <a href="https://portal.ufcg.edu.br/"><img src="https://www.cdsa.ufcg.edu.br/images/logos/UFCG-Central-Selo-SemFundo.png" alt="Brasão UFCG" style="max-width: 60px;"></a>
                  <div>
                    <h3 class="text-black font-bold ml-3 text-left" style="font-weight: 700; font-size: 14px; margin: 0;">{{ content.institution[selectedLang] }}</h3>
                    <p class="ml-1 text-black text-left text-lg font-theme-content" style="font-weight: 300; margin-top: 5px;">{{ content.education[selectedLang] }}</p>
                  </div>
                </div>

                  <p class="mr-10 mb-10 ml-7 text-black text-left mt-7 font-theme-content text-lg">{{ content.description[selectedLang] }} </p> 
                </div>                   
            </div>      
        </section>
    </div>
    <!-- Features Section End -->
</template>

<style scoped>

.section {
    background-color: rgb(226, 226, 226);
    padding: 20px;
    border-radius: 15px; 
    color: black;
    font-size: 22px ;
}

.logo_ufcg {
  text-align: center; 
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}

</style>