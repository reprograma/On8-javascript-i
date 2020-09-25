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

const botao = document.querySelector('#button');
let mensagem = document.querySelector('.media-titulo');

function calculadora(x, y) {
    return Math.round((x + y) / 2);
}
botao.addEventListener('click', function(event) {
    event.preventDefault();
    let primeiraNota = parseFloat(document.querySelector('.nota1').value);
    let segundaNota = parseFloat(document.querySelector('.nota2').value);
let media = calculadora(primeiraNota, segundaNota);

if (media >= 7 && media <= 10) {
    mensagem.textContent = `Parabéns! Você foi aprovado com a média ${media}`;
    mensagem.classList.add('aprovacao');
    mensagem.classList.remove('reprovacao');
    mensagem.classList.remove('mensagem-de-erro');
} 
if (media < 7 && medi >= 0 ) {
    mensagem.textContent = `Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é ${media}`;
    mensagem.classList.add('reprovacao');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('mensagem-de-erro');
}
if (isNaN(primeiraNota) || isNaN(segundaNota)) {
    mensagem.textContent = 'Prencha com valores numéricos entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
    mensagem.classList.remove('reprovacao');
    mensagem.classList.remove('aprovacao');
}
if (primeiraNota < 0 || primeiraNota > 10 || primeiraNota < 0 || segundaNota > 10){
    mensagem.textContent = 'Prencha com valores numéricos entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
}
});