
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
                <li class="ml-10 uppercase flex justify-center bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200 ml-10">
                        <a :href="content.cv_url[selectedLang]">{{ langStore.selectedLanguage == 'en' ? 'Download cv' : 'Baixar cv'}}</a>
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
                        <a  @click="toggleMobileNav()" href="#features">Formação</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#faq">Experiências</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#subscribe">Contato</a>
                    </li>
                </ul>
                <div class="flex justify-center items-end h-52">
                    <ul class="flex space-x-8">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
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
            education: {
                en: 'Educaiton',
                pt: 'Formação',
            },
            experience: {
                en: 'Experience',
                pt: 'Experiência',
            },
            projects: {
                en: 'Projects',
                pt: 'Projetos',
            },
            contacts: {
                en: 'Contacts',
                pt: 'Contatos',
            }
        },

        cv_url: {
            //LAST UPDATE: Aug, 24, 2024.
            en: 'https://drive.usercontent.google.com/uc?id=1iEDKbsI7XUfMudZROs4U4sbH4JvST2lk&export=download',
            pt: 'https://drive.usercontent.google.com/uc?id=1bwBBLbaNw4TpGYLmg9a3X1u0lODRCyXy&export=download',
        }

    });

    let mobileNav = ref(false);
    let toggleMobileNav = () => {
        mobileNav.value = !mobileNav.value
    }

    let selectedLanguage = ref('pt');
    //TODO: Things here are no longer necessary. Remove it! 
    watch(selectedLanguage, (newValue, oldValue) => {
      console.log("THE LANG BEFORE WAS: ", langStore.selectedLanguage);
      langStore.setLanguage(selectedLanguage.value);
      console.log("THE LANG NOW IS: ", langStore.selectedLanguage);
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

