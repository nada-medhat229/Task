<script setup>
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>
<template>
  <section class="w-100 bg-white">
    <Navbar />

  </section>
      <RouterView />
</template>
