<script setup>
import AddTaskModal from '../components/Modal.vue'
import { ref } from "vue";

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}

const newBoardData = (data) => {
  console.log(data);
}
</script>

<template>
  <div>
    <button @click="toggleModal" class="px-3 py-1 white text-sm uppercase bg-white text-cyan-500 font-bold rounded-md">
      Add
      Board</button>

    <AddTaskModal v-if="showModal" @toggleModal='toggleModal' @newBoardData="newBoardData" />
  </div>
</template>