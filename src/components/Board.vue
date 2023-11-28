<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable'
import Task from '../components/Task.vue'
import TaskModal from '@/components/TaskModal.vue'
import { useBoardStore } from "@/stores/board.js";

const boardStore = useBoardStore()
const props = defineProps({
  board: {
    type: Object,
    required: true
  },
  boardIndex: {
    type: Number,
    required: true
  }
})

console.log('BOARD: ', props.board);

const showModal = ref(false)

const removeBoard = (index) => {
  console.log('REMOVE BOARD Clikced INDEX:', index)
  boardStore.deleteBoard(index)
}

const toggleModal = () => {
  return showModal.value = !showModal.value
}

</script>

<template>
  <!-- <div v-if="boards.length > 0" class="grid md:flex gap-5 overflow-x-scroll "> -->

  <div class="w-[350px] shrink-0 border-t-4 p-5 rounded-md shadow-md mb-20 min-h-auto bg-slate-100"
    :class="`border-${color}-500`">
    <TaskModal v-if="showModal" :boardId="boardIndex" @toggleModal="toggleModal" />
    <div class="">
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg text-gray-700">{{ board.title }}</h3>
        <div class="flex gap-1">
          <button @click.prevent="showModal = !showModal"
            class="text-xs flex gap-1 shadow-sm py-1 px-1 font-semibold uppercase text-white bg-green-500 hover:bg-green-600 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add Task</span>
          </button>
          <button @click.prevent="removeBoard(boardIndex)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 text-rose-600 hover:text-rose-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </button>
        </div>
      </div>
      <p class="text-sm">{{ board.description }}</p>
    </div>
    <hr class="my-4">
    <div v-if="board.items?.length === 0" class="min-h-screen">
      <h3 class="text-gray-500 text-center font-semibold text-lg">You have no tasks for this board yet. Please add a
        task
      </h3>
    </div>
    <div v-else>
      <draggable v-model="board.items" group="board" tag="div" item-key="id" handle=".drag">
        <template #item="{ element: task }" class="transform duration-500 ease-in-out">
          <Task :task="task"  :boardId="boardIndex"  />
        </template>
      </draggable>
    </div>
  </div>
  <!-- </div> -->
  <!-- -->
</template>
