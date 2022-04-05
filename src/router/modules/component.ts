import { RouteRecordRaw } from "vue-router"
export const cmpt:Array<RouteRecordRaw> = [
  { path: '/useCom', component: () => import('../../views/studyCom/useCom/index.vue') },
]