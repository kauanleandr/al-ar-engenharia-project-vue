<template>
  <div>
    <Topbar msg="topbar da pagina" />
    <Carousel msg="Carousel da pagina" />
    <Circulos msg="Circulos com os projetos concluidos" />
    <Midpage msg="parte do meio da pagina" />
    <Footer msg="footer da pagina" />
  </div>
</template>

<script>
import Topbar from '@/components/layout/Topbar.vue';
import Carousel from '@/pages/Home/Carousel.vue';
import Circulos from '@/pages/Home/Circulos.vue';
import Midpage from '@/pages/Home/Midpage.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  name: 'VueHome',
  components: {
    Topbar,
    Carousel,
    Circulos,
    Midpage,
    Footer,
  },
};
</script>
