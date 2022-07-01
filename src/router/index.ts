import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/hash-generator',
    name: 'HashGenerator',
    component: () => import('../views/HashGenerator.vue'),
  },
  {
    path: '/uuid-generator',
    name: 'UUIDGenerator',
    component: () => import('../views/UUIDGenerator.vue'),
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
