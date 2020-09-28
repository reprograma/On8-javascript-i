let botaoCalcular = document.querySelector("#button");
let mensagem = document.querySelector(".media-titulo");


// função pra caucular a media
function calcularMedia(n1, n2) {
  return Math.round((n1 + n2) / 2);
}

botaoCalcular.addEventListener("click", function (event) {
  event.preventDefault();
  const nota1 = parseFloat(document.querySelector(".nota1").value);
  const nota2 = parseFloat(document.querySelector(".nota2").value);
  let mediaFinal = calcularMedia(nota1, nota2);

  if (mediaFinal >= 7 && mediaFinal <= 10) {
    mensagem.textContent = `Parabéns! Você foi aprovado com média ${mediaFinal}`;
    mensagem.classList.add("aprovacao");
    mensagem.classList.remove("reprovacao");
    mensagem.classList.remove("mensagem-de-erro");

    document.querySelector(".nota1").value = "";
    document.querySelector(".nota2").value = "";
  }

  if (mediaFinal < 7 && mediaFinal >= 0) {
    mensagem.textContent = `Infelizmente você foi reprovado! Sua média é ${mediaFinal}`;
    mensagem.classList.add("reprovacao");
    mensagem.classList.remove("aprovacao");
    mensagem.classList.remove("mensagem-de-erro");

    document.querySelector(".nota1").value = "";
    document.querySelector(".nota2").value = "";
  }

  if (isNaN(nota1) || isNaN(nota2)) {
    mensagem.textContent =
      "Preencha corretamente os campos. Digite valores numéricos entre 0 e 10.";
    mensagem.classList.add("mensagem-de-erro");
    mensagem.classList.remove("aprovacao");
    mensagem.classList.remove("reprovacao");

    document.querySelector(".nota1").value = "";
    document.querySelector(".nota2").value = "";
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    mensagem.textContent = "Preecha com valores entre 0 e 10";
    mensagem.classList.add("mensagem-de-erro");

    document.querySelector(".nota1").value = "";
    document.querySelector(".nota2").value = "";
  }
});