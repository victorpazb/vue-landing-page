<script setup>
import experience from '../data/experience';
import { ref, computed, onMounted } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';
    
const langStore = useLanguageStore();

const content = ref({
    title: {
        en: 'Experience',
        pt: 'Experiência',
    },

    job_1: {
        company: 'FlexTogether',
        role: {
            en: 'Intern',
            pt: 'Estagiário',
        },
        description: {
            en: 'GOOD PLACE TO START HERE',
            pt: 'BOM LUGAR PARA COMEÇAR BLA BLA BLA',
        },
        period: {
            start: 'Jan, 2023',
            end: {
                en: 'Mar, 2024',
                pt: 'Mar, 2024',
            },
        }
        
    },

    job_2: {
        company: 'FlexTogether',
        role: {
            en: 'Junior Fullstack Developer',
            pt: 'Desenvolvedor Fullstack Júnior',
        },
        description: {
            en: 'GOOD PLACE TO START HERE',
            pt: 'BOM LUGAR PARA COMEÇAR BLA BLA BLA',
        },
        period: {
            start: 'Mar, 2024',
            end: {
                en: 'Current',
                pt: 'Atualmente',
            },
        }
    },
});

const selectedLang = computed(() => {
  return langStore.selectedLanguage == 'en' ? 'en' : 'pt';
});

onMounted(()=>{
    const langStore = useLanguageStore();
});




</script>

<template>
    <!-- Experience Section Start -->
    <div id="experience" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="mb-10 text-3xl md:text-4xl font-theme-heading font-medium text-center">{{ content.title[selectedLang] }}</h2>

                <div class="section grid grid-cols-[auto_1fr] gap-4 items-start">
                    <a href="https://flextogether.com/">
                        <img src="/images/flextogether_logo.jpeg" alt="FT_logo" class="rounded-lg w-16">
                    </a>
                    <div>
                        <h2 class="text-lg font-semibold">{{ `${content.job_1.company} - ${content.job_1.role[selectedLang]}` }}</h2>
                        <h3 class="text-sm text-gray-500">{{ `${content.job_1.period.start} - ${content.job_1.period.end[selectedLang]}` }}</h3>
                        <p class="text-theme-grayish-blue text-lg font-theme-content mt-7">{{ content.job_1.description[selectedLang] }}</p>
                    </div>
                </div>


                <div class="line"></div>

                <div class="section grid grid-cols-[auto_1fr] gap-4 items-start">
                    <a href="https://flextogether.com/">
                        <img src="/images/flextogether_logo.jpeg" alt="FT_logo" class="rounded-lg w-16">
                    </a>
                    <div>
                        <h2 class="text-lg font-semibold">{{ `${content.job_2.company} - ${content.job_2.role[selectedLang]}` }}</h2>
                        <h3 class="text-sm text-gray-500">{{ `${content.job_2.period.start} - ${content.job_2.period.end[selectedLang]}` }}</h3>
                        <p class="text-theme-grayish-blue text-lg font-theme-content mt-7">{{ content.job_2.description[selectedLang] }}</p>
                    </div>
                </div>

                
               
            </div>
            
        </section>
    </div>
    <!-- Experience Section End -->
</template>

<style scoped>
.section {
    background-color: rgb(226, 226, 226);
    padding: 20px;
    border-radius: 15px; 
    color: black;
    font-size: 22px ;
}

.line {
    background-color: rgb(10, 20, 55);
    width: 3px;
    height: 50px;
    margin-left: 30px;
    padding: 0;
    border: 0;
}

</style>

