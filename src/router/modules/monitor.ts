import { RouteRecordRaw } from "vue-router"
export const monitor:Array<RouteRecordRaw> = [
  { path: '/testComputed', component: () => import('../../views/studyMoniter/testComputed/index.vue') },
]