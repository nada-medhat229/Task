<template>
    <div class="navbar fixed-top">
    <v-row align="center" justify="space-between" class="ma-auto mx-md-5 mx-1 px-md-5 px-1">
      <!-- Logo -->
      <v-col cols="7" sm="auto">
        <img src="../assets/images/Logo.svg" alt="logo" class="w-100" />
      </v-col>

      <!-- Mobile Menu Button -->
      <v-col cols="5" sm="auto" align="end" class="px-0 d-sm-none" size="x-large" >
        <v-btn  @click="menuOpen = !menuOpen" variant="text" :ripple="false">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>

      <!-- Language Dropdown -->
      <v-col cols="auto" class="d-none d-sm-flex px-0">
        <v-menu class="text-start px-0">
          <template v-slot:activator="{ props }" class="px-0">
            <v-btn v-bind="props" variant="text" :ripple="false" class="px-0">
              <v-icon left size="large">mdi-web</v-icon>
              <span class="md:px-1 px-2 text-body-2">
                {{ $t("Language") }}
              </span>
              <v-icon right class="text-sm-h4 text-h5">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0 text-center">
            <v-list-item @click="toggleLanguage()" class="pa-0">
              {{ currentLanguage === "en" ? "العربية" : "English" }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- Navigation Links for Desktop -->
    <v-row align="center" justify="space-between" class="d-none d-sm-flex mx-md-5 mx-1 px-md-5 px-1 pb-md-5 pb-2">
      <v-col cols="auto">
        <router-link
          v-for="item in navItems"
          :key="item.text"
          :to="item.to"
          class="nav-link px-2 text-black"
          :class="isActive(item) ? 'text-decoration-underline' : 'text-decoration-none'"
        >
          {{ $t(item.text) }}
        </router-link>
      </v-col>

      <!-- Social Media Icons -->
      <v-col cols="auto" class="me-4">
        <img src="../assets/images/" alt="">
        <v-icon>mdi-snapchat</v-icon>
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-facebook</v-icon>
      </v-col>
    </v-row>

    <!-- Mobile Menu Dropdown -->
    <v-row v-if="menuOpen" align="center" justify="center" class="d-sm-none mt-0 ">
      <v-col cols="12" class="pt-0">
        <v-list class="pa-0">
          <v-list-item
            v-for="item in navItems"
            :key="item.text"
            :to="item.to"
            class="nav-link px-2 text-black"
            :class="isActive(item) ? 'text-decoration-underline' : 'text-decoration-none'"
            @click="menuOpen = false"
          >
            {{ $t(item.text) }}
          </v-list-item>
        </v-list>
        <v-menu class="text-start px-0">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="text" :ripple="false">
              <v-icon left size="large">mdi-web</v-icon>
              <span class="md:px-1 px-2 text-body-2">
                {{ $t("Language") }}
              </span>
              <v-icon right class="text-sm-h4 text-h5">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0 text-center">
            <v-list-item @click="toggleLanguage()" class="pa-0">
              {{ currentLanguage === "en" ? "العربية" : "English" }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-col cols="auto">
        <v-icon>mdi-snapchat</v-icon>
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-facebook</v-icon>
      </v-col>
      </v-col>
    </v-row>
  </div>

</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router';

const { locale } = useI18n();
const currentLanguage = ref(localStorage.getItem("lang") || "en");
const menuOpen = ref(false);

const navItems = ref([
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "service", to: "/services" },
  { text: "Partener", to: "/partners" },
  { text: "Contact", to: "/contact" },
]);

const route = useRoute();
const isActive = (item) => item.to === route.path;

watch(currentLanguage, (newLang) => {
  locale.value = newLang;
  document.documentElement.setAttribute(
    "dir",
    newLang === "ar" ? "rtl" : "ltr"
  );
  localStorage.setItem("lang", newLang);
});

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "ar" : "en";
};
</script>
<style>

.navbar .v-btn--active > .v-btn__overlay,
.v-btn > .v-btn__overlay {
  opacity: 0 !important;
}
</style>
<style scoped>
.navbar {
  background-color: white;
  z-index: 1000;
  width: 100%;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.navbar .v-btn--active > .v-btn__overlay,
.v-btn > .v-btn__overlay {
  opacity: 0 !important;
}

/* .text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-none {
  text-decoration: none !important;
} */
</style>
