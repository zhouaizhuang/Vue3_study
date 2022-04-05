import { RouteRecordRaw } from "vue-router"
export const reactive:Array<RouteRecordRaw> = [
  { path: '/testReactive', component: () => import('../../views/studyReactive/testReactive/index.vue') },
  { path: '/testReadonly', component: () => import('../../views/studyReactive/testReadonly/index.vue') },
  { path: '/testShallowReactive', component: () => import('../../views/studyReactive/testShallowReactive/index.vue') },
  { path: '/testToRef', component: () => import('../../views/studyReactive/testToRef/index.vue') },
  { path: '/testToRaw', component: () => import('../../views/studyReactive/testToRaw/index.vue') },
]