<template>
  <Topbar msg="topbar da pagina"/>
  <Carousel msg="Carousel da pagina"/>
  <Circulos msg="Circulos com os projetos concluidos"/>
  <VueFooter msg="footer da pagina"/>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Carousel from './components/Carousel.vue';
import Circulos from './components/Circulos.vue';
import VueFooter from './components/VueFooter.vue';


export default {
  name: 'App',
  components: {
    Topbar,
    Carousel,
    Circulos,
    VueFooter
  }
}
</script>