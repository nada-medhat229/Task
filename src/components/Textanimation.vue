<template>
    <section class="scrolling-text" v-if="contact">
    <p class="loop-text">{{ contact.advertisement }}</p>
    <p class="loop-text">{{ contact.advertisement }}</p>
    <p class="loop-text">{{ contact.advertisement }}</p>
</section>
  
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

// Access the Vuex store
const store = useStore();

// Use Vuex getters as computed properties
const data = computed(() => store.getters.getData);

// Safely access the 'about' data, ensuring it only returns if data is valid
const contact = computed(() => {
  if (data.value && data.value.data && data.value.data.contact) {    
    return data.value.data.contact;
  }
  return null;
});

// Fetch data on component mount
onMounted(() => {
  store.dispatch('fetchData');
});
</script>
<style scoped>
 .loop-text {
         animation: loopText 5s infinite linear;      
    }

    @keyframes loopText {

       from {
           transform: translateX(-100%);
        }

       to {
           transform: translateX(0);
        }

    }
    
  .scrolling-text {
padding: 50px 0;
display: flex;
white-space: nowrap;
width: 100%;
text-transform: uppercase;
overflow: hidden;

}


.loop-text {
font-size: 3.3rem;
text-transform: uppercase;
padding: 0 0.1em;
}
.loop-text:nth-child(even) {
  font-weight: 600;
}
@media (max-width: 576px) {
    .loop-text {
font-size: 2rem;
}
.scrolling-text {
padding: 30px 0;
}
}
</style>
