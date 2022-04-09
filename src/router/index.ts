import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { refs } from "./modules/ref"
import { reactive } from "./modules/reactive"
import { monitor } from "./modules/monitor"
import { cmpt } from "./modules/component"
import { transition } from "./modules/transition"
const routes:Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'index' } },
  { path: '/index', name: 'index', component: () => import('../views/index.vue') },
  { path: '/regist', component: () => import('../components/regist/index.vue') },
  ...refs,
  ...reactive,
  ...monitor,
  ...cmpt,
  ...transition,
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router