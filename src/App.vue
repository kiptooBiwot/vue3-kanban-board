<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'



</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="container mx-auto px-5 py-10 text-gray-600">
    <RouterView />
  </main>
</template>

<style scoped></style>
