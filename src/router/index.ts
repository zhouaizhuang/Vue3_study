import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import {refs} from "./modules/ref"
const routes:Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'index' } },
  { path: '/index', name: 'index', component: () => import('../views/index.vue') },
  { path: '/regist', component: () => import('../components/regist/index.vue') },
  ...refs,
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router