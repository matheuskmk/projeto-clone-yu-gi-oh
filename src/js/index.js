
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;


cartoes.forEach(cartao => {
     cartao.addEventListener("click", function(){
     const cartaVirada = cartao.querySelector(".carta-virada")

    //virar o cartão
    cartao.classList.toggle("virar");
    //mostrar o fundo da carta
     cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao =cartao.querySelector("descricao")
    descricao.classList.toggle("esconder");
     });


     


});


btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  EsconderCartaoSelecionado();
  cartaoAtual++;
  Mostrarcartao(cartaoAtual);


});
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");


});
function Mostrarcartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function EsconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

