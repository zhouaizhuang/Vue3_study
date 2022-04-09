import { RouteRecordRaw } from "vue-router"
export const transition:Array<RouteRecordRaw> = [
  { path: '/transition', component: () => import('../../views/animate/testTransition/index.vue') },
]