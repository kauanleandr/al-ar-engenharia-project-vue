<template>
<Carousel
:autoplay="6950"
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
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
  name: "VueCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      slides: [
        { id: 1, image: "/Imgcarousel/slide1.jpg" },
        { id: 2, image: "/Imgcarousel/slide1.jpg" },
        { id: 3, image: "/Imgcarousel/slide1.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.carousel__slide {
  margin-top: 105px;
}

.carousel-image {
  width: 95%;
  height: auto;
  object-fit: cover; /* Ajusta para centralizar a imagem */
  display: block;
  margin: 0 auto;
}

/* Responsividade para telas menores */
@media (max-width: 1024px) {
  .carousel__icon {
    display: none;
  }
  .carousel-image {
    margin-top: 90px;
    width: 100%; /* Diminui a largura das imagens em telas menores */
  }
}

@media (max-width: 768px) {
  .carousel__slide {
    margin-top: 90px; /* Ajusta a margem superior */
  }
  
  .carousel-image {
    width: 85%; /* Diminui ainda mais a largura das imagens em telas menores */
  }
}

@media (max-width: 480px) {
  .carousel__slide {
    margin-top: 40px; /* Ajusta ainda mais a margem em telas muito pequenas */
  }

  .carousel-image {
    width: 80%; /* A largura da imagem continua a diminuir */
  }
}
</style>