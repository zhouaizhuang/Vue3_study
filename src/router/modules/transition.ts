import { RouteRecordRaw } from "vue-router"
export const transition:Array<RouteRecordRaw> = [
  { path: '/transition', component: () => import('../../views/animate/testTransition/index.vue') },
  { path: '/transition2', component: () => import('../../views/animate/testTransition2/index.vue') },
]