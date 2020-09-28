// Calculadora de média de provas
// Você irá construir uma aplicação web com os seguintes requisitos:

// Calcula o valor médio entre duas notas e informa ao aluno seu resultado quando o botão é acionado
// Resultados: APROVADO > 70%
// Resultados: REPROVADO < 70%

// Exibir na mensagem a média atual do aluno.
// Ex: Parabéns! Você foi aprovado com a média X
// Ex: Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é X

// Validar campos de input para não aceitar valores vazios e formatos inválidos

// ATENÇÃO - LEMBRE-SE QUE PARA TRANSFORMAR STRING(texto) EM NÚMERO É NECESSÁRIO UTILIZAR FUNÇÕES, PEQUISE parseInt ou parseFloat

const botaoCalcular = document.querySelector('#button');
const nota1 = document.querySelector('.nota1');
const nota2 = document.querySelector('.nota2');
const mensagem = document.querySelector('.media-titulo');


function mediaCalculada(n1, n2){
return Math.round((n1 + n2) /2);
}

botaoCalcular.addEdventlistener('click', function(event){
event.preventDeFault();
const nota1 = parsefloat(document.querySelector('.nota1').value);
const nota2 = parsefloat(document.querySelector('.nota2').value);
let mediaFinal = mediaCalculada(nota1, nota2);

if (mediaFinal >= 7 && mediaFinal <= 10){
mensagem.textContent = `Parabéns! Você foi aprovado com a média X é ${mediaFinal}`;
mensagem.classList.add('aprovacao');
mensagem.classList.remove('reprovacao');
mensagem.classList.remove('mensagem-de-erro');

}
if(mediaFinal < 7 && mediaFinal >=0){
    mensagem.textContent = `Infelizmente, vocefoi reprovado. Sua média foi ${mediaFinal}`;
    mensagem.classList.add('reprovacao');
    mensagem.classList.remove('reprovacao');
    mensagem.classList.remove('mensagem-de-erro');
}
if(isNam(nota1) || isNam(nota2)){
    mensagem.textContent = 'Preencha corretamente os campos, com valores numéricos entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('reprovacao');
}
if(nota1 < 0 || nota1 > 10 || nota2 < 0  || nota2 > 10 ){
    mensagem.textContent = 'Preencha com valores entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
   }
});






