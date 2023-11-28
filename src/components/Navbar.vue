<script setup>
import AddBoard from './AddBoard.vue';
import { ref } from 'vue'



</script>
<template>
  <div class="w-full bg-cyan-500 py-4 shadow-md">
    <div class="container mx-auto px-5 text-white flex items-center justify-between">
      <h2 class="font-bold text-xl">Vue-Kanban</h2>
      <ul class="flex gap-5 items-center font-bold ">
        <RouterLink to="/">
          <li>Home</li>
        </RouterLink>
        <RouterLink to="/facts">
          <li>Facts</li>
        </RouterLink>
        <RouterLink to="about">
          <li>About</li>
        </RouterLink>
        <!-- <AddBoardd /> -->
        <li>
          <AddBoard @click.prevent="showModal = !showModal" />
        </li>
      </ul>
    </div>

  </div>
</template>


<style lang="scss" scoped></style>