<template>
  <section class="product-showcase">
    <v-row class="ma-auto mx-md-5 mx-1 px-md-5 px-1">
      <v-col class="text-center mb-6">
        <img src="@/assets/images/Frame.svg" alt="frame" class="frame"/>
        <p class="textproduct">
          Goochie is a leading Chinese brand in permanent makeup, founded in
          1996. It offers a variety of devices and pigments to meet global
          market needs, with a wide network of agents in over 64 countries. The
          brand focuses on providing high-quality products and professional,
          safe services to users worldwide.
        </p>
      </v-col>
    </v-row>
    <v-card class="cardproduct">
        <h2 class="pb-5 px-md-4 px-2">
            Duogel Product Showcase
        </h2>
    <v-tabs v-model="activeTab">
      <v-tab v-for="(category, index) in categories" :key="index" :value="index">
        {{ category }}
      </v-tab>
    </v-tabs>

    <!-- Tabs Content -->
    <v-card-text>
      <v-tabs-window v-model="currentWindow">
        <v-tabs-window-item v-for="(group, index) in groupedProducts" :key="index" :value="index">
            <v-row>
          <v-col
          cols="6"
            md="3"
            v-for="(product, idx) in group"
            :key="idx"
            class="h-100"
          >
          <v-card
        class="mx-auto pb-4 d-flex flex-column align-center mb-2 mastercard"
              flat
      >    
              <img   :src="product.image" 
                height="320"
                class="w-100 productimage"
           />

           <h3>
            {{ product.title }}
           </h3>
            </v-card>
          
          </v-col>
        </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
    <v-row justify="start" class="mx-5">
        <v-btn icon @click="prev" class="right_btn">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn icon @click="next" class="left_btn">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
    </v-row>
  </v-card>

  
  </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import image1 from '@/assets/images/silver.webp.svg';
import image2 from '@/assets/images/lemon.webp.svg';
import image3 from '@/assets/images/new.webp.svg';
import image4 from '@/assets/images/barbie.webp.svg';
const activeTab = ref(0); 
const currentWindow = ref(0); 
const products = ref([
  { title: "Folia Transfer Silver ", image: image1 },
  { title: "New Due Sugar Lemon", image: image2 },
  { title: "New Due Ombre Sponges", image: image3 },
  { title: "Paint Gel 5g-063 Barbie", image: image4 },
  { title: "Folia Transfer Silver ", image: image1 },
  { title: "New Due Sugar Lemon", image: image2 },
  { title: "New Due Ombre Sponges", image: image3 },
  { title: "Paint Gel 5g-063 Barbie", image: image4 },
]);

// Data for categories
const categories = [
  "Devices",
  "UV Gel Nail Polishes",
  "Nail Art",
  "Accessories",
  "UV Gels",
  "Liquids / Preparations",
  "Care",
  "Disinfection / Hygiene",
  "Acrylics",
];

// Computed property to group the products into sets of 4
const groupedProducts = computed(() => {
  const groups = [];
  for (let i = 0; i < products.value.length; i += 4) {
    groups.push(products.value.slice(i, i + 4));
  }
  return groups;
});

// Methods for carousel control and navigation
const next = () => {    
  currentWindow.value++;
  console.log(currentWindow.value);
  
  if (currentWindow.value >= groupedProducts.value.length) {
    currentWindow.value = 0; // Wrap around to the first window
  }
};

const prev = () => {
  currentWindow.value--;
  if (currentWindow.value < 0) {
    currentWindow.value = groupedProducts.value.length - 1; // Wrap around to the last window
  }
};
</script>


<style scoped>
.product-showcase {
  background-color: #e3f2fd;
  padding: 40px 20px;
  margin-top: 10rem;
}
.textproduct {
  width: 65%;
  margin: auto;
  color: #737373;
}
.product-showcase .v-tab{
    color: rgba(0, 0, 0, 0.3);
}
.product-showcase .v-tab-item--selected{
    background: #DEEBF6;
    color: #000;
    border-radius: 35px;
    font-weight: 600;
}
.product-showcase .v-tab.v-tab.v-btn {
    height: 38px;
}
.product-showcase .cardproduct{
    padding: 50px;
    border-radius: 25px;
    box-shadow: none;
}
.mastercard{
    background: #F4F4F4;
    padding: 10px;
    border-radius: 18px;
}
.product-showcase .v-btn--icon.v-btn--density-default {
    width: 40px;
    height: 40px;
    margin: 0 4px;
}
@media (max-width: 768px) {
 .product-showcase .productimage{
    height: auto !important;
 }
 .product-showcase{
    margin-top: 2rem;
}
}
@media (max-width: 576px) {
    .product-showcase .cardproduct {
        padding: 30px 15px;}
        .textproduct{
    width: 100%;
}
.product-showcase .frame{
    width: 225px;

}
.cardproduct h2{
    font-size: 20px;
}
}
@media (max-width: 396px) {
  .product-showcase .v-card-text{
    padding: 0;
  }
  .mastercard {
    background: #F4F4F4;
    padding: 5px;
    border-radius: 18px;
    margin-bottom: 0 !important;
    text-align: center;
  }
  .mastercard h3{
    font-size: 14px;
    font-weight: 400;
  }
  .product-showcase .v-btn--icon.v-btn--density-default.left_btn, .product-showcase .v-btn--icon.v-btn--density-default.right_btn {

    margin-top: 35px;
}
}
</style>
<style>
.product-showcase .v-tab__slider {
    display: none;
    }
    .product-showcase .v-btn--icon.v-btn--density-default.left_btn ,
    .product-showcase .v-btn--icon.v-btn--density-default.right_btn {
  background: #83B7D7 !important;
  color: #fff;
}
.product-showcase .v-btn--icon .v-icon {
    transform: rotatey(180deg);
}
    </style>
