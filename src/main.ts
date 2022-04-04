import { createApp } from 'vue'
import App from './App.vue'
import "./common.css"
import Card from "./components/Card/index.vue"

// 组件的全局引用
createApp(App).component('Card', Card).mount('#app')
