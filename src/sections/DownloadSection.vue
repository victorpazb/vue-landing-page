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
            en: 'My first professional experience was as a Frontend Intern at FlexTogether, a California-based healthtech startup focused on elderly rehabilitation. I worked with Vue.js and the Quasar framework, implementing everything from simple layout adjustments to suggesting usability improvements, which sparked my deeper interest in UI/UX design. I also participated in version control using Git and GitHub and followed CI/CD workflows through agile development rituals.',
            pt: 'Minha primeira experiência profissional foi como Estagiário de Frontend na FlexTogether, uma startup californiana de saúde focada na reabilitação de idosos. Trabalhei com Vue.js e o framework Quasar, implementando desde ajustes simples de layout até sugerir melhorias de usabilidade, o que despertou meu interesse por design de UI/UX. Também participei do controle de versão com Git e GitHub e segui fluxos de CI/CD por meio dos rituais do desenvolvimento ágil.'
            }
        ,
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
            en: 'After my internship, I was promoted to Junior Fullstack Developer at FlexTogether, where I took on greater responsibilities. I worked on the backend using Node.js and managed our MongoDB database. I also integrated and maintained several AWS microservices, such as Cognito, S3 buckets, EC2 virtual machines, and configured load balancers to ensure scalability and stability in our deployments.',  
            pt: 'Após o estágio, fui promovido a Desenvolvedor Fullstack Júnior na FlexTogether, onde assumi mais responsabilidades. Trabalhei no backend utilizando Node.js e gerenciei nosso banco de dados MongoDB. Também integrei e mantive diversos microserviços da AWS, como Cognito, buckets S3, máquinas virtuais EC2 e configurei load balancers para garantir escalabilidade e estabilidade nas nossas implantações.'
        },
        period: {
            start: 'Mar, 2024',
            end: {
                en: 'Dez, 2024',
                pt: 'Dez, 2024',
            },
        }
    },

    job_3: {
        company: 'Accenture',
        role: {
            en: 'System Developer Associate',
            pt: 'Desenvolvedor de Sistemas',
        },
        description: {
            en: 'Currently, I work as a Systems Developer at Accenture, where I create automation solutions in Python with the goal of reducing manual effort for clients. My work involves tools like Elasticsearch and Zabbix, as well as the use of artificial intelligence to enhance automation efficiency, scalability, and maintainability.',    
            pt: 'Atualmente, trabalho como Desenvolvedor de Sistemas na Accenture, onde crio soluções de automação em Python com o objetivo de reduzir o esforço manual dos clientes. Meu trabalho envolve ferramentas como Elasticsearch e Zabbix, além do uso de inteligência artificial para aumentar a eficiência, escalabilidade e manutenção das automações.'
        },

        period: {
            start: 'Jan, 2025',
            end: {
                en: 'Current',
                pt: 'Atualmente',
            },
        }
        
    }
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
                        <p class="text-black text-lg font-theme-content mt-7">{{ content.job_1.description[selectedLang] }}</p>
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
                        <p class="text-black text-lg font-theme-content mt-7">{{ content.job_2.description[selectedLang] }}</p>
                    </div>
                </div>

                <div class="line"></div>

                <div class="section grid grid-cols-[auto_1fr] gap-4 items-start">
                    <a href="https://accenture.com/">
                        <img src="/images/accenturebrasil_logo.jpeg" alt="FT_logo" class="rounded-lg w-16">
                    </a>
                    <div>
                        <h2 class="text-lg font-semibold">{{ `${content.job_3.company} - ${content.job_3.role[selectedLang]}` }}</h2>
                        <h3 class="text-sm text-gray-500">{{ `${content.job_3.period.start} - ${content.job_3.period.end[selectedLang]}` }}</h3>
                        <p class="text-black text-lg font-theme-content mt-7">{{ content.job_3.description[selectedLang] }}</p>
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

