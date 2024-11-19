<template>
  <div class="topbar">
    <div class="logo">ALÇAR ENGENHARIA</div>
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
.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3E4D54;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.menu a {
  margin-left: 2rem;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #22BACF;
}
</style>
