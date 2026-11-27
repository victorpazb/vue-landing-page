<template>
    <header class="container mx-auto px-5 py-6 lg:py-12" @keydown.esc="mobileNav = false">
        <nav :aria-label="selectedLang === 'en' ? 'Main navigation' : 'Navegação principal'">
            <div class="flex flex-wrap items-center gap-3 lg:gap-6">
                <button
                    @click="toggleMobileNav()"
                    type="button"
                    class="flex shrink-0 items-center justify-center rounded p-2 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-primary"
                    :aria-label="selectedLang === 'en' ? (mobileNav ? 'Close menu' : 'Open menu') : (mobileNav ? 'Fechar menu' : 'Abrir menu')"
                    :aria-expanded="mobileNav"
                    aria-controls="mobile-navigation"
                >
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                        <path v-if="mobileNav" d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z" />
                        <path v-else d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
                    </svg>
                </button>

                <ul class="hidden flex-1 items-center gap-6 font-theme-heading font-medium lg:flex xl:gap-10">
                    <li v-for="item in navigation" :key="item.id" class="uppercase hover:text-theme-secondary transition duration-200">
                        <a :href="`#${item.id}`" v-smooth-scroll>{{ content.title[item.title][selectedLang] }}</a>
                    </li>
                </ul>

                <a
                    :href="content.cv_url[selectedLang]"
                    class="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded border-2 border-transparent bg-theme-secondary px-3 py-2 text-sm uppercase text-white shadow-md hover:border-theme-secondary hover:bg-white hover:text-theme-secondary lg:px-6 lg:text-base"
                >
                    {{ selectedLang === 'en' ? 'Download CV' : 'Baixar CV' }}
                </a>

                <div class="ml-auto shrink-0 lg:ml-0">
                    <label for="language-select" class="sr-only">{{ selectedLang === 'en' ? 'Language' : 'Idioma' }}</label>
                    <select id="language-select" v-model="selectedLanguage" class="rounded bg-white py-2 pl-2 pr-8 text-base text-black">
                        <option value="pt">🇧🇷 PT</option>
                        <option value="en">🇬🇧 ENG</option>
                    </select>
                </div>
            </div>

            <ul
                id="mobile-navigation"
                v-show="mobileNav"
                class="mt-4 flex flex-col rounded bg-theme-dark-blue px-5 font-theme-heading uppercase text-white lg:hidden"
            >
                <li v-for="item in navigation" :key="item.id" class="border-b border-theme-grayish-blue last:border-b-0 hover:text-theme-secondary transition duration-200">
                    <a @click="mobileNav = false" :href="`#${item.id}`" class="block py-4">{{ content.title[item.title][selectedLang] }}</a>
                </li>
            </ul>
        </nav>
    </header>
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

    const navigation = [
        { id: 'education', title: 'education' },
        { id: 'experience', title: 'experience' },
        { id: 'projects', title: 'projects' },
        { id: 'contacts', title: 'contacts' }
    ];

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
