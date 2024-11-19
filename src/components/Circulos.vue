<template>
  <div class="circulos-exemplos">
    <h1>Projetos Concluídos</h1>
    <div class="circulos-container">
      <a href="#" class="circulo">
        <img :src="require('@/assets/RESIDENCIAL.jpg')" alt="Residencial" />
        <span>RESIDENCIAL</span>
      </a>
      <a href="#" class="circulo">
        <img :src="require('@/assets/COMERCIAL.jpg')" alt="Comercial" />
        <span>COMERCIAL</span>
      </a>
      <a href="#" class="circulo">
        <img :src="require('@/assets/INDUSTRIAL.webp')" alt="Industrial" />
        <span>INDUSTRIAL</span>
      </a>
    </div>
  </div>

  <section class="numbers">
    <div class="container">
      <div class="number-card">
        <h3>+ de 13.000 m²</h3>
        <p>em obras executadas</p>
      </div>
      <div class="number-card">
        <h3>+ de 100</h3>
        <p>obras entregues</p>
      </div>
    </div>
  </section>

  <section class="differentials">
    <div class="container">
      <h2>Nossos Diferenciais</h2>
      <ul>
        <li>Todas as nossas obras são regularizadas</li>
        <li>Nossas obras são acompanhadas diariamente por engenheiros civis</li>
        <li>Comunicação assertiva, resolutiva e transparente</li>
        <li>Equipe formada por colaboradores experientes</li>
        <li>Prazo respeitado com cronograma estipulado</li>
        <li>Relatórios semanais com acompanhamento físico e financeiro</li>
        <li>Entrega com qualidade, superando expectativas</li>
      </ul>
    </div>
  </section>
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

/* em obras executadas / obras entregues */

.number-card {
  display: inline-block;
  width: 40%;
  margin: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Efeito suave */
}

.number-card h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}
.numbers {
  display: grid; /* Usando Grid Layout */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 20px; /* Espaçamento entre itens */
  background: #f4f4f4;
  padding: 2rem;
  text-align: center;
}
.number-card:hover {
  transform: translateY(-5px); /* Elevação ao passar o mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* FIM / em obras executadas / obras entregues */
</style>