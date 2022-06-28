import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/hash-generator',
    name: 'HashGenerator',
    component: () => import('../views/HashGenerator.vue'),
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
