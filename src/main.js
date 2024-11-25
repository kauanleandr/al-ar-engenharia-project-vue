import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import Home from '@/pages/Home/Home.vue';

// Definição das rotas
const routes = [
  { path: '/', name: 'VueHome', component: Home }, // Rota da página inicial
  // Outras páginas podem ser adicionadas aqui
];

// Configuração do Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Criação e montagem do aplicativo Vue
createApp(App).use(router).mount('#app');
