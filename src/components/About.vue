<template>
  <v-row
    style="margin-top: 70px"
    class="justify-sm-space-between justify-center align-content-stretch"
  >
    <!-- Left Image Column -->
    <v-col cols="7" sm="6" class="px-0">
      <img src="@/assets/images/about.svg" class="imgabout" />
    </v-col>

    <!-- Right Content Column -->
    <v-col cols="12" sm="6" class="px-5">
      <div class="about-content">
        <h1 class="heading">
{{ about?about.title:'' }}
        </h1>
        <p class="mb-xl-5 mb-1">
          {{ about?about.desc:'' }}
        </p>
        <h2 class="font-weight-bold pt-xl-5 pt-1 values-title">
          {{ $t("Values") }}
        </h2>
        <v-list dense v-if="about">
          <v-list-item class="value-item" v-for="(item, index) in about.values" :key="index">{{ item.title }}</v-list-item>
          <!-- <v-list-item class="value-item">{{
            $t("WomenEmpowerment")
          }}</v-list-item>
          <v-list-item class="value-item">{{ $t("Innovation") }}</v-list-item>
          <v-list-item class="value-item"
            >{{ $t("ExcellentCustomer") }}
          </v-list-item> -->
        </v-list>
      </div>
    </v-col>
  </v-row>
</template>


<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

// Access the Vuex store
const store = useStore();

// Use Vuex getters as computed properties
const data = computed(() => store.getters.getData);

// Safely access the 'about' data, ensuring it only returns if data is valid
const about = computed(() => {
  if (data.value && data.value.data && data.value.data.about) {
    return data.value.data.about;
  }
  return null;
});

// Fetch data on component mount
onMounted(() => {
  store.dispatch('fetchData');
});
</script>

<style scoped>
.heading {
  letter-spacing: 0.2em;
  font-size: 5rem;
  font-weight: 100;
  margin-bottom: 20px;
}
[dir="rtl"] .heading {
  letter-spacing: 0;
}
.about-content {
  width: 85%;
  margin-right: auto;
  margin-left: 0;
}

[dir="rtl"] .about-content {
  margin-left: auto;
  margin-right: 0;
}
.values-title {
  font-size: 2.6rem;
}

.value-item {
  background-color: #f4f4f4;
  border-radius: 10px !important;
  margin-bottom: 20px;
  padding: 8px;
}
.imgabout {
  width: 85%;
  margin-right: auto;
  object-fit: cover;
}
@media (max-width: 1200px) {
  .heading {
    letter-spacing: 0.2em;
    font-size: 3.8rem;
    margin-bottom: 0px;
  }
  .imgabout {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (max-width: 992px) {
  .heading {
    letter-spacing: 0.2em;
    font-size: 2.8rem;
    margin-bottom: 0px;
  }
  .about-content {
    width: 95%;
  }
}
</style>
