import { RouteRecordRaw } from "vue-router"
export const reactive:Array<RouteRecordRaw> = [
  { path: '/testReactive', component: () => import('../../views/studyReactive/testReactive/index.vue') },
]