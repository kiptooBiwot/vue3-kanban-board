import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import withUUID from 'vue-uuid'

import App from './App.vue'
import router from './router'

const app = withUUID(createApp(App))

app.use(createPinia())
app.use(router)

app.mount('#app')
