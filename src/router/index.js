import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('@/pages/Home/Home.vue') }, // Página inicial
  { path: '/residential', name: 'Residential', component: () => import('@/pages/Residential/Residential.vue') },
  { path: '/commercial', name: 'Commercial', component: () => import('@/pages/Commercial/Commercial.vue') },
  { path: '/industrial', name: 'Industrial', component: () => import('@/pages/Industrial/Industrial.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
