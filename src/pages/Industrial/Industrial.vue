<template>
  <div>
    <Topbar msg="topbar da pagina" />
    <section class="galeria">
    <img src="https://images.pexels.com/photos/21369704/pexels-photo-21369704/free-photo-of-homem-baia-doca-vaga.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <img src="https://images.pexels.com/photos/27200179/pexels-photo-27200179/free-photo-of-panorama-vista-paisagem-flores.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <img src="https://images.pexels.com/photos/29401471/pexels-photo-29401471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    
  </section>
    <Footer msg="footer da pagina" />
  </div>
  </template>
  
<script>
import Footer from '@/components/layout/Footer.vue';
import Topbar from '@/components/layout/Topbar.vue';

  export default {
    name: 'VueIndustrial',
    components: {
      Topbar,
      Footer
    },
  };
</script>

<style>
.galeria{
  margin-top: 120px;
  columns: 200px;
  column-gap: 0.5em;
}
img{
  width: 100%;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
}
</style>