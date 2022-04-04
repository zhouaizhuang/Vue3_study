import { createApp } from 'vue'
import App from './App.vue'
import "./common.css"
import Card from "./components/Card/index.vue"
import { createPinia, PiniaPluginContext } from "pinia"
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
type Options = {
  key?:string
}
const __piniaKey__:string = 'xiaoman'
const piniaPlugin = (options:Options) => {
  return (context:PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${options?.key??__piniaKey__}-${store.id}`)
    store.$subscribe(() => {
      setStorage(`${options?.key??__piniaKey__}-${store.id}`, toRaw(store.$state))
    })
    return {
      ...data
    }
  }
}
const store = createPinia()
store.use(piniaPlugin({
  key: 'pinia'
}))
let app = createApp(App)
app.use(store)


type Filter = {
  format: <T>(str:T) => string
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters:Filter
  }
}
app.config.globalProperties.$filter = {
  format<T>(str:T):string{
    return `真${str}`
  }
}
// 组件的全局引用
app.component('Card', Card).mount('#app')
