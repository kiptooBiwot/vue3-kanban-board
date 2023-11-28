<script setup>
import { computed } from 'vue'
import { useBoardStore } from '@/stores/board.js'

const boardStore = useBoardStore()

const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  boardId: {
    type: Number,
    required: true
  },
  taskIndex: {
    type: Number,
    required: true
  }
})

const priorityColor = computed(() => {
  if (props.task?.priority === 'high') {
    return 'bg-rose-500 text-rose-100'
  } else if (props.task?.priority === 'medium') {
    return 'bg-orange-500 text-orange-100'
  } else {
    return 'bg-green-500 text-green-100'

  }
})

const deleteTask = (data) => {
  boardStore.deleteTask(data)
}
</script>

<template>
  <div>
    <div class="bg-white rounded-md px-3 py-2 mb-4 shadow-sm hover:cursor-pointer space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <!-- :class="[task.priority === 'high' ? 'bg-rose-500 text-rose-100' : null, task.priority === 'medium' ? 'bg-orange-500 text-orange-100' : null, task.priority === 'low' ? 'bg-green-500 text-green-100' : null]" -->
          <span class="text-sm font-bold">Priority: </span>
          <span class="p-[3px] uppercase text-[10px] font-bold rounded leading-relaxed" :class="priorityColor">{{
            task.priority }}</span>
        </div>
        <div class="drag">
          <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-sm text-gray-700">{{ task?.title }}</h4>
        <p class="truncate text-sm">{{ task?.description }}</p>
        <div class="flex justify-end">
          <button @click="deleteTask({ boardId: boardId, taskId: taskIndex })"
            class="px-[6px] py-[4px] rounded font-bold shadow-md bg-rose-200  hover:bg-rose-300 uppercase text-rose-500 text-xs">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>