/ Seleção dos elementos do HTML
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

// Função responsável por alterar a mensagem na página
function mostrarMensagem() {
  mensagem.textContent = " Seja fabulosa, seja você mesma e mostre suas imperfeições perfeitas! Seja bem-vinda a Monster High!";
  mensagem.style.color = "#ff007f"; // Modifica a cor do texto para rosa choque
}

// Evento de clique para executar a função
botao.addEventListener("click", mostrarMensagem);
