<template>
  <footer padless class="pt-5" v-if="footer">
    <v-row class="pb-5 ma-auto mx-md-5 mx-1 px-md-5 px-1">
      <!-- Informations Column -->
      <v-col cols="12" md="2">
        <h3 class="footer-title">{{ $t('Informations') }}</h3>
        <v-list class="bg-transparent">
          <v-list-item v-for="item in navItems" :key="item.text" class="px-0">
            <router-link
              :to="item.to"
              class="text-black text-decoration-none"
            >
              {{ $t(item.text) }}
            </router-link>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Support Column -->
      <v-col cols="12" md="2" class="d-flex justify-md-center">
        <div>
          <h3 class="footer-title">{{ $t('Support') }}</h3>
          <v-list dense class="bg-transparent">
            <v-list-item v-for="item in footItems" :key="item.text" class="px-0">
            <router-link
              :to="item.to"
              class="text-black text-decoration-none"
            >
              {{ $t(item.text) }}
            </router-link>
          </v-list-item>
              </v-list>
        </div>
      </v-col>

      <!-- Logo and Contacts Column -->
      <v-col
        cols="12"
        md="3"
        class="d-flex flex-column align-center justify-center"
      >
        <img
          :src="footer.logo"
          alt="logo"
          max-width="150"
          class="mb-4"
        />
      </v-col>
      <v-col cols="12" md="2">
        <h3 class="footer-title">{{ $t('Contacts') }}</h3>
        <v-list dense class="bg-transparent">
          <v-list-item class="px-0">{{ footer.phone }}</v-list-item>
          <v-list-item class="px-0">{{ footer.email }}</v-list-item>
        </v-list>

        <div>
        
            <a :href="footer.socials.snapchat" class="text-black" target="_blank">
          <v-icon large class="mx-2">mdi-snapchat</v-icon>

            </a>
            <a :href="footer.socials.instagram" class="text-black" target="_blank">
              <v-icon large class="mx-2">mdi-instagram</v-icon>
            </a>
            <a :href="footer.socials.facebook" class="text-black" target="_blank">
              <v-icon large class="mx-2">mdi-facebook</v-icon>
            </a>
        </div>
      </v-col>

      <!-- Subscribe Column -->
      <v-col cols="12" md="3">
        <h3 class="footer-title">{{ $t('SubscribeMore') }}</h3>

        <v-text-field
          variant="solo"
          hide-details
          placeholder="Enter your mail"
          class="rounded-xl"
        ></v-text-field>

        <button class="btnfooter">{{ $t('Send') }}</button>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="pa-5 mx-4 text-md-end text-center">
      <span>2010 © {{ $t('AllRights') }}</span>
    </div>
  </footer>
</template>
<script setup>
import { ref , computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const navItems = ref([
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "service", to: "/services" },
  { text: "Partener", to: "/partners" },
  { text: "Contact", to: "/contact" },
]);
const footItems = ref([
  { text: "FAQs", to: "/" },
  { text: "TermsConditions", to: "/terms" },
  { text: "Privacypolicy", to: "/privacy" },
]);
// Access the Vuex store
const store = useStore();

// Use Vuex getters as computed properties
const data = computed(() => store.getters.getData);

// Safely access the 'about' data, ensuring it only returns if data is valid
const footer = computed(() => {
  if (data.value && data.value.data && data.value.data.footer) {    
    return data.value.data.footer;
  }
  return null;
});
// Fetch data on component mount
onMounted(() => {
  store.dispatch('fetchData');
});
</script>
<style>
footer {
  background: #deebf6;
}
footer .v-list-item--density-default.v-list-item--one-line {
  min-height: 40px;
  padding-left: 0;
  padding-right: 0;
}
footer .footer-title {
  font-weight: 600;
}
footer .btnfooter {
  background: #f4f4f4;
  border-radius: 50px;
  padding: 6px 20px 3px;
  text-transform: uppercase;
}
footer .v-input--density-default .v-field--variant-outlined,
.v-input--density-default .v-field--single-line,
.v-input--density-default .v-field--no-label {
  border-radius: 50px;
  margin-bottom: 15px;
  margin-top: 15px;
}
footer .v-input {
  width: 80%;
}
footer .v-field {
  border-radius: 50px;
  --v-field-input-padding-top: 4px;
  --v-field-input-padding-bottom: 4px;
}
footer .v-field__input {
  min-height: 35px;
}
footer .v-field--variant-solo,
.v-field--variant-solo-filled {
  box-shadow: none;
}
</style>
