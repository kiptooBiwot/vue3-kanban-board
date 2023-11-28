import { defineStore, acceptHMRUpdate } from 'pinia'


export const useBoardStore = defineStore('board', {
  state: () => ({
    boards: [
      // {
      //   id: 'b0e9ad9c-55f1-4b51-98f4-76f544ca43ee',
      //   title: 'Board Number One',
      //   description: 'Some description goes here',
      //   color: 'red',
      //   items: [
      //     // {
      //     //   id: "4710388c-b5b5-41d2-a819-8f882940fc74",
      //     //   title: 'Test Task',
      //     //   description: 'This would be the first task as it were!',
      //     //   priority: 'high'
      //     // },
      //     // {
      //     //   id: "4710388c-b5b5-41d2-a819-8f882940fc75",
      //     //   title: 'Test Task 2',
      //     //   description: 'Cupiditate natus eligendi esse laudantium quos accusamus blanditiis rerum dolor quidem, deserunt laborum, nihil non Veniam molestiae debitis ad facilis reprehenderit dolore delectus maxime esse laboriosam odit.',
      //     //   priority: 'medium'
      //     // },
      //     // {
      //     //   id: "4710388c-b5b5-41d2-a819-8f882940fc76",
      //     //   title: 'Test Task 3',
      //     //   description: 'Cupiditate natus eligendi esse laudantium quos accusamus blanditiis rerum dolor quidem, deserunt laborum, nihil non Veniam molestiae debitis ad facilis reprehenderit dolore delectus maxime esse laboriosam odit.',
      //     //   priority: 'low'
      //     // }
      //   ]
      // },
    ]
  }),
  getters: {},
  actions: {
    createBoard(payload) {
      this.boards.push({
        id: payload.id,
        title: payload.title,
        description: payload.description,
        color: payload.color,
        items: []
      })
    },
    deleteBoard(index) {

      this.boards.splice(index, 1)
    },
    addNewTask(payload) {
      console.log('TASK PAYLOAD:', payload);

      this.boards[payload.index].items.push({
        id: payload.id,
        title: payload.title,
        priority: payload.priority,
        description: payload.description
      })
    },
    deleteTask(payload) {
      console.log('DATA on STORE', payload)
      console.log('BOARD', this.boards[payload.boardId].items[payload.taskId])
      this.boards[payload.boardId]?.items?.splice(payload.taskId, 1)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBoardStore, import.meta.hot))
}