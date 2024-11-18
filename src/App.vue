<template>
  <Topbar msg="topbar da pagina"/>
  <Carousel msg="Carousel da pagina"/>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Carousel from './components/Carousel.vue';


export default {
  name: 'App',
  components: {
    Topbar,
    Carousel,
  }
}
</script>