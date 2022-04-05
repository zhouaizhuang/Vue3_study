import { RouteRecordRaw } from "vue-router"
export const reactive:Array<RouteRecordRaw> = [
  { path: '/testReactive', component: () => import('../../views/studyReactive/testReactive/index.vue') },
  { path: '/testReadonly', component: () => import('../../views/studyReactive/testReadonly/index.vue') },
  { path: '/testShallowReactive', component: () => import('../../views/studyReactive/testShallowReactive/index.vue') },
]