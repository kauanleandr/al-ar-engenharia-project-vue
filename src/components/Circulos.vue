<template>
  <div class="circulos-exemplos">
    <div class="circulos-container">
      <a href="#" class="circulo">
        <img :src="require('@/assets/imgcirculos/RESIDENCIAL.jpg')" alt="Residencial" />
        <span>RESIDENCIAL</span>
      </a>
      <a href="#" class="circulo">
        <img :src="require('@/assets/imgcirculos/COMERCIAL.jpg')" alt="Comercial" />
        <span>COMERCIAL</span>
      </a>
      <a href="#" class="circulo">
        <img :src="require('@/assets/imgcirculos/INDUSTRIAL.webp')" alt="Industrial" />
        <span>INDUSTRIAL</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCirculos",
};
</script>

<style scoped>
/* circulos */

.circulos-exemplos {
  text-align: center;
  margin: 40px 0; /* Maior margem para centralizar visualmente melhor */
}

.circulos-container {
  display: flex;
  justify-content: center;
  gap: 200px; /* Mais espaçamento entre os círculos */
}

.circulo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.circulo img {
  width: 300px; /* Maior largura */
  height: 300px; /* Maior altura */
  border-radius: 50%; /* Mantém o formato circular */
  object-fit: cover;
  border: 4px solid #ccc; /* Bordas mais grossas */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animação suave */
}

.circulo img:hover {
  transform: scale(1.15); /* Ampliar mais ao passar o mouse */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra ao passar o mouse */
}

.circulo span {
  margin-top: 15px; /* Espaço maior abaixo das imagens */
  font-size: 18px; /* Fonte maior para os textos */
  font-weight: bold;
}


/* fim do circulo */
</style>