<template>
  <div class="topbar">
    <div class="logo"><img src="/logo.png" alt="Logo" /></div>
    <nav class="menu">
      <a href="#home">Home</a>
      <a href="#sobre">Sobre</a>
      <a href="#serviços">Serviços</a>
      <a href="#portfolio">Portfólio</a>
      <a href="#contato">Contato</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>
<style scoped>
.logo img {
  width: 100px; /* Ajuste conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
}

.topbar {
  margin-top:0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu a {
  margin-left: 3rem;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #00bcd4;
}
</style>
