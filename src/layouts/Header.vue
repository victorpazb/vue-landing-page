
<template>
    <!-- Navbar Start -->
    <div class="container mx-auto px-5">
        <header class="flex justify-between py-12 items-center">
            <!-- <div>
                <a href="/"><img src="/images/logo-bookmark.svg" alt="Site Logo"></a>
            </div> -->
            
            <nav class="flex justify-end flex-col md:flex-row">
                <!-- Menu Toggler -->
                <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>

                <!-- Desktop Menu -->
                
                <ul class="flex flex-col md:flex-row font-theme-heading font-medium items-center space-y-7 md:space-y-0 md:space-x-10">
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#features" v-smooth-scroll>{{ content.title.education[selectedLang] }}</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#education" v-smooth-scroll>{{ content.title.experience[selectedLang] }}</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#projects" v-smooth-scroll>{{ content.title.projects[selectedLang] }}</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#contacts" v-smooth-scroll>{{ content.title.contacts[selectedLang] }}</a></li>
                </ul>

                <!--THIS IS THE ENG CV-->
                <!--TODO: fix the links in DRIVE and put it here!-->
                <li class="ml-10 uppercase flex justify-center bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary">
                    <a :href="content.cv_url[selectedLang]">{{langStore.selectedLanguage == 'en' ? 'Download cv' : 'Baixar cv'}}</a>
                </li>
            
                <div class="select-container">
                    <select id="language-select" v-model="selectedLanguage" class="mt-10 ml-10 select-right">
                        <option class="pr-5" value="pt">🇧🇷 PT</option>
                        <option value="en">🇬🇧 ENG</option>
                    </select>
                </div>

            </nav>
        </header>

        <!-- Mobile Menu Start-->
        <div v-show="mobileNav">
            <div class="absolute px-5 py-12 block z-30 top-0 left-0 w-full h-full bg-gradient-to-b from-theme-dark-blue via-theme-dark-blue-tp to-theme-dark-blue">
                <div class="flex justify-between items-center">
                    <img src="/images/logo-bookmark-white.svg" alt="Logo">
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x text-white" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul class="uppercase text-white text-md tracking-widest items-center flex flex-col mt-14">
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center">
                        <a @click="toggleMobileNav()" href="#features">Formação</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a @click="toggleMobileNav()" href="#faq">Experiências</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a @click="toggleMobileNav()" href="#subscribe">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
    <!-- Navbar End -->
</template>

<script setup>
    import { onMounted, ref, watch, computed } from 'vue';
    import { useLanguageStore } from '../stores/useLanguageStore';

    const langStore = useLanguageStore();

    const content = ref({
        title: {
            education: { en: 'Education', pt: 'Formação' },
            experience: { en: 'Experience', pt: 'Experiência' },
            projects: { en: 'Projects', pt: 'Projetos' },
            contacts: { en: 'Contacts', pt: 'Contatos' }
        },
        cv_url: {
            en: "https://drive.usercontent.google.com/u/0/uc?id=1EuXmgvmlYJtjhFf3juslDwwQQurGCChp&export=download",
            pt: "https://drive.usercontent.google.com/uc?id=1qefxBOAay1-GZInZTPo-F6oaohAdWqSV&export=download"
        }
    });

    const mobileNav = ref(false);
    const toggleMobileNav = () => {
        mobileNav.value = !mobileNav.value;
    };

    const selectedLanguage = ref(localStorage.getItem('language') || 'pt');

    watch(selectedLanguage, (newValue) => {
        localStorage.setItem('language', newValue);
        langStore.setLanguage(newValue);
    });

    onMounted(() => {
        const storedLanguage = localStorage.getItem('language') || 'pt';
        selectedLanguage.value = storedLanguage;
        langStore.setLanguage(storedLanguage);
    });

    const selectedLang = computed(() => {
        return langStore.selectedLanguage === 'en' ? 'en' : 'pt';
    });
</script>

<style scoped>
    select {
        background-color: white;
        color: black;
        padding: 5px;
        font-size: 16px;
        border-radius: 4px;
    }

    option[data-icon]:before {
        content: attr(data-icon) " ";
        margin-right: 8px;
    }

    .select-right {
        position: absolute; 
        right: 5%; 
        top: 10px; 
        margin-right: 10px; 
        padding: 5px;
        padding-right: 30px;
        font-size: 16px;
        border-radius: 4px;
    }
</style>

