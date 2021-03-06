import { RouteRecordRaw } from "vue-router"
export const refs:Array<RouteRecordRaw> = [
  { path: '/testRef', component: () => import('../../views/studyRef/testRef/index.vue') },
  { path: '/testIsRef', component: () => import('../../views/studyRef/testIsRef/index.vue') },
  { path: '/testShallowRef', component: () => import('../../views/studyRef/testShallowRef/index.vue') },
  { path: '/testTriggerRef', component: () => import('../../views/studyRef/testTriggerRef/index.vue') },
  { path: '/testCustomRef', component: () => import('../../views/studyRef/testCustomRef/index.vue') },
]