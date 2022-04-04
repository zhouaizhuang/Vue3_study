import { RouteRecordRaw } from "vue-router"
export const refs:Array<RouteRecordRaw> = [
  { path: '/testRef', component: () => import('../../views/studyRef/testRef/index.vue') },
  { path: '/testIsRef', component: () => import('../../views/studyRef/testIsRef/index.vue') },
  { path: '/testShallowRef', component: () => import('../../views/studyRef/testShallowRef/index.vue') }
]