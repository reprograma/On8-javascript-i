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

let botaoCalcularMedia = document.querySelector ('#button');
let message = document.querySelector('.media-titulo');
const botaoApagar = document.querySelector('.clear');

function calculoMedia(v1, v2){
    return Math.round((v1+v2)/2);
}

botaoCalcularMedia.addEventListener('click', function (event) {
    event.preventDefault();
    let nota1 = parseFloat(document.querySelector('.nota1').value);
    let nota2 = parseFloat(document.querySelector('.nota2').value);
    let valorMediaFinal = calculoMedia(nota1, nota2);

    if (valorMediaFinal >= 7 && valorMediaFinal <= 10) {
        message.textContent = `Parabéns! Você foi aprovado com média ${valorMediaFinal}`;
        message.classList.add('aprovacao');
        message.classList.remove('reprovacao');
        message.classList.remove('mensagem-de-erro');
    }

    if (valorMediaFinal <= 7 && valorMediaFinal >=0) {
        message.textContent = `Você foi reprovado! Sua média é ${valorMediaFinal}`;
        message.classList.add('reprovacao');
        message.classList.remove('aprovacao');
        message.classList.remove('mensagem-de-erro');
    }

    if (isNaN(nota1) || isNaN(nota2)) {
        message.textContent = 'Preencha corretamente os campos com apenas números entre 0 e 10';
        message.classList.add('mensagem-de-erro');
        message.classList.remove('aprovacao');
        message.classList.remove('reprovacao');
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        message.textContent = 'Preencha os campos com valores apenas entre 0 e 10'
        message.classList.add('mensagem-de-erro');
    }

});

botaoApagar.addEventListener ('click', function(event){
    event.preventDefault();
    document.querySelector('.nota1').value = '';
    document.querySelector('.nota2').value = '';

    message.classList.remove('reprovacao')
    message.classList.remove('aprovacao')
    message.classList.remove('mensagem-de-erro')
    message.textContent = 'Sua média é:'
});