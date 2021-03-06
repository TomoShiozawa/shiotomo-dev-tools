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
  {
    path: '/base-converter',
    name: 'BaseConverter',
    component: () => import('../views/BaseConverter.vue'),
  },
  {
    path: '/roulette',
    name: 'Roulette',
    component: () => import('../views/other-tools/SimpleRoulette.vue'),
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import('../views/other-tools/SimpleTimer.vue'),
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
