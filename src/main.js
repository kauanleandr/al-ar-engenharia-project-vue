import { createApp } from 'vue'
import App from './App.vue'
import VueCarousel from './components/Carousel.vue';
createApp(App).mount('#app')
VueCarousel.use(VueCarousel);