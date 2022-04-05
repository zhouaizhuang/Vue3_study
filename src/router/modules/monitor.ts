import { RouteRecordRaw } from "vue-router"
export const monitor:Array<RouteRecordRaw> = [
  { path: '/testComputed', component: () => import('../../views/studyMoniter/testComputed/index.vue') },
  { path: '/testWatch', component: () => import('../../views/studyMoniter/testWatch/index.vue') },
  { path: '/testWatchMore', component: () => import('../../views/studyMoniter/testWatchMore/index.vue') },
  { path: '/deepWacth', component: () => import('../../views/studyMoniter/deepWacth/index.vue') },
]