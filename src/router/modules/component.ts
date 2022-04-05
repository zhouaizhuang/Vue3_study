import { RouteRecordRaw } from "vue-router"
export const cmpt:Array<RouteRecordRaw> = [
  { path: '/useCom', component: () => import('../../views/studyCom/useCom/index.vue') },
  { path: '/definePropsEmit', component: () => import('../../views/studyCom/definePropsEmit/father.vue') },
  { path: '/recursionCom', component: () => import('../../views/studyCom/recursionCom/index.vue') },
]