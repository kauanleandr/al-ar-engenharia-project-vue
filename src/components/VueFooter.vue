<template>
  <footer class="rodape" id="contato">
    <div class="rodape-div">

        <div class="rodape-div-1">
            <div class="rodape-div-1-coluna">
                <!-- elemento -->
                <span><b>ENDEREÇO</b></span>
                <p>ED. TROPICAL CENTER, AV. GOV. MAGALHES BARATA 695 SALA 103</p>
            </div>
        </div>

        <div class="rodape-div-2">
            <div class="rodape-div-2-coluna">
                <!-- elemento -->
                <span><b>Contatos</b></span>
                <p>@alcarengenharia</p>
                <p>(91) 98737-7403</p>
                <p>(91) 98242-2476</p>
            </div>
        </div>

        <div class="rodape-div-3">
            <div class="rodape-div-3-coluna">
                <!-- elemento -->
                <span><b>Links</b></span>
                <p><a href="#sobre">Sobre</a></p>
                <p><a href="#serviços">Serviços</a></p>
                <p><a href="#Portfólio">Portfólio</a></p>
            </div>
        </div>

    </div>
    <p class="rodape-direitos">Kauanleandr © 2023 – Todos os Direitos Reservados.</p>
</footer>
</template>

<script>
export default {
  name: "VueFooter",
};
</script>

<style scoped>
.menu p {
  margin-left: 3rem;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.menu p:hover {
  color: #000000;
}

.rodape{
    background-color: #3E4D54;
    color: white;
    height: auto;
    width: 100%;
    font-size: 14px;
    font-family: helvetica;
    margin: 0; /* Garantindo que o rodapé ocupe toda a largura */
    padding: 0; /* Removendo qualquer padding adicional que possa interferir */
}
.rodape a{
    text-decoration: none;
    color: white;
}
.rodape p{
    margin-bottom: 5px;
}
.rodape-div{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto; /* Ajustando o margin para garantir que o conteúdo fique centralizado */
    align-items: stretch;
    padding: 60px 10px 40px 10px;
}
.rodape-div-1, .rodape-div-2, .rodape-div-3, .rodape-div-4{
    display: flex;
    width: calc(100% / 4 - 20px);
    padding: 10px;
}
.rodape span{
    font-size: 20px;
    color: white;
}
.rodape-direitos{
    width: 100%; /* Garantindo que ocupe a largura total */
    background-color: black;
    padding: 10px;
    margin: 0px;
    text-align: center;
}
/*mobile*/
@media (max-width: 768px) {
    .rodape-div-1, .rodape-div-2, .rodape-div-3, .rodape-div-4{
        width: calc(50% - 20px);
        padding: 10px;
    }
    .rodape-div{
        padding: 60px 0px 40px 0px;
    }
}

</style>
