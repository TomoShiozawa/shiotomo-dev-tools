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
  {
    path: '/base64-encoder',
    name: 'Base64Encoder',
    component: () => import('../views/Base64Encoder.vue'),
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
