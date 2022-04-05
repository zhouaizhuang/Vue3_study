import { RouteRecordRaw } from "vue-router"
export const cmpt:Array<RouteRecordRaw> = [
  { path: '/useCom', component: () => import('../../views/studyCom/useCom/index.vue') },
  { path: '/definePropsEmit', component: () => import('../../views/studyCom/definePropsEmit/father.vue') },
  { path: '/recursionCom', component: () => import('../../views/studyCom/recursionCom/index.vue') },
  { path: '/dynamicCom', component: () => import('../../views/studyCom/dynamicCom/index.vue') },
  { path: '/slot', component: () => import('../../views/studyCom/slot/index.vue') },
]