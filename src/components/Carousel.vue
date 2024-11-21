<template>
  <Carousel
    :autoplay="true"
    :autoplayTimeout="5000"
    :transition="500"
    :mouse-drag="true"
    :touch-drag="true"
    wrap-around
    responsive-breakpoints
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <img :src="slide.image" :alt="`Slide ${slide.id}`" class="carousel-image" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "VueCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, image: "/Imgcarousel/slide1.jpg" },
        { id: 2, image: "/Imgcarousel/slide2.jpg" },
        { id: 3, image: "/Imgcarousel/slide3.avif" },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ajusta para centralizar a imagem */
  display: block;
  margin: 0 auto;
}
</style>
