import { createApp } from 'vue'
import { createPinia } from "pinia"
import {router} from './router/index.js'
import './style.css'
import App from './App.vue'
const store = createPinia()

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
