<script setup>
import { ref } from "vue"
import { useBoardStore } from "@/stores/board.js";
import { uuid } from 'vue-uuid'

const boardStore = useBoardStore()

const props = defineProps({
  boardId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['toggleModal'])

console.log('BOARD ID IN PROPS:', props.boardId)

const task = ref({
  id: uuid.v4(),
  title: '',
  priority: '',
  // color: ''
})
// const id = props.id
const createTask = (index) => {
  console.log('BOARD ID', index)
  boardStore.addNewTask({ ...task.value, index })
  closeModal()
}

const closeModal = () => {
  emit('toggleModal')
}
</script>

<template>
  <div class="fixed flex justify-center inset-0 h-screen w-screen items-center bg-black bg-opacity-20">


    <div class="px-4 py-5 bg-white rounded-md max-w-[350px] text-gray-600 shadow-md ">

      <div class="space-y-3">
        <h3>Add A New Task</h3>
        <div class="space-y-1">
          <div>
            <label for="board-title" class="text-xs font-bold">Enter task title</label>
            <input v-model="task.title" type="text" name="board-title" class="border rounded-md py-1 px-4 w-full">
          </div>

          <div>
            <label for="board-description" class="text-xs font-bold">Select Task Priority</label>

            <select v-model="task.priority" class="border rounded-md py-1 px-4 w-full">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

          </div>
          <div>
            <label for="board-title" class="text-xs font-bold">Enter task description</label>
            <textarea v-model="task.description" type="text" name="board-description"
              class="border rounded-md py-1 px-4 w-full"></textarea>
          </div>
        </div>
        <div class="flex justify-end gap-5">
          <button @click.prevent="closeModal"
            class="py-1 px-4 bg-orange-500 text-white text-sm uppercase rounded-md">Cancel</button>
          <button @click.prevent="createTask(boardId)"
            class="py-1 px-4 bg-green-500 text-white text-sm uppercase rounded-md">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>