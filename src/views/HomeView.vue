<script setup>
import { ref, onMounted, watch } from 'vue'
import { useLocalStorage } from "@vueuse/core";
import draggable from 'vuedraggable'
import Board from "../components/Board.vue"
import { useBoardStore } from '@/stores/board.js'
import { storeToRefs } from 'pinia'

// const boardStore = useBoardStore()

const { boards } = storeToRefs(useBoardStore())

// console.log('BOARDS', boards.value)
watch(boards.value, async () => {   
  console.log('Something changed in boards');

  // TODO: Handle saving changes to the backend API instead of localStorage 
  const localBoards = useLocalStorage('boards', boards.value)
})

onMounted(() => {
  const temp = localStorage.getItem('boards')

  console.log('TEMP BOARDS', temp)
  if (temp) {
    boards.value = JSON.parse(temp)
  }
})


</script>

<template>
  <main class="min-h-screen">
    <!-- v-for="(board, index) in boards" :key="index" -->
    <div v-if="boards.length > 0" class="grid md:flex gap-5 overflow-x-scroll ">

      <!-- <draggable v-model="boards" tag="div" item-key="id">
        <template #item="{ element }" > -->
      <Board v-for="(board, index) in boards" :key="index"   :boardIndex="index" :board="board" />
        <!-- </template> -->
    <!-- </draggable> -->
    </div>
    <div v-else>
      <h3 class="text-gray-500 text-center font-bold text-2xl">You have no boards yet. Please add a board</h3>
    </div>
  </main>
</template>
