// Calculadora de média de provas
//x + y / 2 = média

// Você irá construir uma aplicação web com os seguintes requisitos:

// Calcula o valor médio entre duas notas e informa ao aluno seu resultado quando o botão é acionado
// Resultados: APROVADO > 70%
// Resultados: REPROVADO < 70%

//construir uma função se o aluno foi aprovado ou reprovado
//comparar os valores para exibir no final


// Exibir na mensagem a média atual do aluno.
// Ex: Parabéns! Você foi aprovado com a média X
// Ex: Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é X

// Validar campos de input para não aceitar valores vazios e formatos inválidos

// ATENÇÃO - LEMBRE-SE QUE PARA TRANSFORMAR STRING(texto) EM NÚMERO É NECESSÁRIO UTILIZAR FUNÇÕES, PEQUISE parseInt ou parseFloat


// ACOMPANHAMENTO DA REVISÃO - AULA 22-09-2020
/*const botaoCalcula = document.querySelector('#button');
const nota1 = document.querySelector('.nota1');
const nota2 = document.querySelector('.nota2');
const mensagem = document.querySelector('.media-titulo');


console.log(botaoCalcula);
console.log(nota1);
console.log(nota2);
console.log(media);

console.log(botaoCalcula, nota1, nota2, mensagem);

function calculaMedia(n1, n2){
   return Math.round(N1 + N2) / 2;

}

botaoCalcula.addEventListener('click', function(event){
    event.preventDefault();
    const nota1 = parseFloat(document.querySelector('.nota1').value);
    const nota2 = parseFloat(document.querySelector('.nota2').value);

    let mediaFinal = calculaMedia(nota1, nota2);
    console.log(calculaMedia(nota1, nota2);

    if (mediaFinal >= 7 && mediaFinal <= 10) {
        mensagem.textContent = `Parabéns! Você foi aprovado com a média é ${mediaFinal}`;
 mensagem.classList.add('aprovacao');
mensagem.classList.remove('reprovacao');
mensagem.classList.remove('mensagem-de-erro');

}

if (mediaFinal < 7 && mediaFinal >= 0){
mensagem.textContent = 'Que pena! Você tomou bomba. Sua média é $ {mediaFinal}';
mensagem.classList.add('reprovacao');
mensagem.classList.remove('aprovacao');
mensagem.classList.remove('mensagem-de-erro');

}

if (isNaN(nota1) || isNaN(nota2)){
mensagem.textContent = 'Preencha corretamente os campos com números entre 0 e 10';

mensagem.classList.add('mensagem-de-erro');
mensagem.classList.remove('aprovacao');
mensagem.classList.remove('reprovacao');

}

if (nota1 > 0 || nota1 < 10 || nota2 > 0 || nota2 < 10){
    mensagem.textContent = 'Preencha com valores entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
}

});*/


//RESOLUÇÃO COMPLETA DO EXERCÍCIO PARA A CASA

const botaoCalcular = document.querySelector('#button');
const mensagem = document.querySelector('.media-titulo');
const botaoApagar = document.querySelector('.clear');

function calculaMedia(n1, n2) {
  return Math.round((n1 + n2) / 2);
}

botaoCalcular.addEventListener('click', function (event) {
  event.preventDefault();
  const nota1 = parseFloat(document.querySelector('.nota1').value);
  const nota2 = parseFloat(document.querySelector('.nota2').value);
  let mediaFinal = calculaMedia(nota1, nota2);

  if (mediaFinal >= 7 && mediaFinal <= 10) {
    mensagem.textContent = `Parabéns! Você foi aprovado com a média é ${mediaFinal}`;
    mensagem.classList.add('aprovacao');
    mensagem.classList.remove('reprovacao');
    mensagem.classList.remove('mensagem-de-erro');
  }

  if (mediaFinal < 7 && mediaFinal >= 0) {
    mensagem.textContent = `Que pena, você tomou bomba. Sua média é ${mediaFinal}`;
    mensagem.classList.add('reprovacao');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('mensagem-de-erro');
  }

  if (isNaN(nota1) || isNaN(nota2)) {
    mensagem.textContent =
      'Preencha corretamente os campo, com valores numéricos entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('reprovacao');
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    mensagem.textContent = 'Preecha com valores entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
  }
});

botaoApagar.addEventListener('click', function (event) {
  event.preventDefault();

  document.querySelector('.nota1').value = '';
  document.querySelector('.nota2').value = '';

  mensagem.classList.remove('reprovacao');
  mensagem.classList.remove('aprovacao');
  mensagem.classList.remove('mensagem-de-erro');
  mensagem.textContent = 'Sua média é :';
});