<script setup>
import { ref } from "vue"
import { useBoardStore } from "@/stores/board.js";
import { uuid } from 'vue-uuid'

const boardStore = useBoardStore()

const emit = defineEmits(['toggleModal'])

const board = ref({
  id: uuid.v4(),
  title: '',
  description: '',
  color: ''
})

const addNewBoard = () => {
  boardStore.createBoard({
    id: board.value.id,
    title: board.value.title,
    description: board.value.description,
    color: board.value.color,
  })

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
        <h3>Add A New Board</h3>
        <div class="space-y-1">
          <div>
            <label for="board-title" class="text-xs font-bold">Enter board title</label>
            <input v-model="board.title" type="text" name="board-title" class="border rounded-md py-1 px-4 w-full">
          </div>
          <div>
            <label for="board-description" class="text-xs font-bold">Enter board description</label>
            <textarea v-model="board.description" type="text" name="board-description"
              class="border rounded-md py-1 px-4 w-full"></textarea>
          </div>
          <div>
            <input type="color" name="" value="#ccc" id="">
          </div>
          <!-- <div>
            <input type="color" id="head" name="head" v-model="board.color" />
            <label for="head">Head</label>
          </div> -->
          <div>
            <label for="board-color" class="text-xs font-bold">Enter board color</label>
            <input type="color" v-model="board.color" name="board-color" class="border rounded-md p-1 w-full">
          </div>
        </div>
        <div class="flex justify-end gap-5">
          <button @click.prevent="closeModal"
            class="py-1 px-4 bg-orange-500 text-white text-sm uppercase rounded-md">Cancel</button>
          <button @click.prevent="addNewBoard"
            class="py-1 px-4 bg-green-500 text-white text-sm uppercase rounded-md">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>