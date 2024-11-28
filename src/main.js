import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import Home from '@/pages/Home/Home.vue';
import Residencial from './pages/Residencial/Residencial.vue';
import Comercial from './pages/Comercial/Comercial.vue';
import Industrial from './pages/Industrial/Industrial.vue';

// Definição das rotas
const routes = [
  { path: '/', name: 'VueHome', component: Home },
  { path: '/Residencial', name: 'VueResidencial', component: Residencial },
  { path: '/Comercial', name: 'VueComercial', component: Comercial },
  { path: '/Industrial', name: 'VueIndustrial', component: Industrial }
  // Rota da página inicial
  // Outras páginas podem ser adicionadas aqui
];

// Configuração do Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Criação e montagem do aplicativo Vue
createApp(App).use(router).mount('#app');
