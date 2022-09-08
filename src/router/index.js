import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
export const router = createRouter({
  history: createWebHistory(), // createWebHashHistory()
  routes: [
    { path: '/', name: 'root', redirect: { name: 'index' }  },
    { path: '/index', name: 'index', component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue') },
    { path: '/testPinia', name: 'testPinia', component: () => import(/* webpackChunkName: "testPinia" */ '../views/testPinia/index.vue') },
  ]
})
