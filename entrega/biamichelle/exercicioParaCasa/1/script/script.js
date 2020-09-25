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

const valorNota1 = document.querySelector('.nota1');
const valorNota2 = document.querySelector('.nota2');
const button = document.querySelector('.button__Calcular');
const button__Apagar = document.querySelector('.button__Apagar');


button.addEventListener("click", calcularMedia )
button__Apagar.addEventListener("click", reiniciarCampo)

function calcularMedia(event){
    event.preventDefault();
    let nota1 = parseFloat(valorNota1.value);
    let nota2 = parseFloat(valorNota2.value);
    let media = (nota1 + nota2) / 2;

    let mensagemFinal = document.querySelector('.media-titulo');


    if (media >=7 && media <=10){
        mensagemFinal.textContent = ` Parabéns! Você foi aprovado com a média ${media}`;
        mensagemFinal.classList.add('aprovacao');
        mensagemFinal.classList.remove('reprovacao');
        mensagemFinal.classList.remove('mensagem-de-erro');
    }

    if(media >=0 && media <7){
        mensagemFinal.textContent = ` Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é ${media}`;
        mensagemFinal.classList.add('reprovacao');
        mensagemFinal.classList.remove('aprovacao');
        mensagemFinal.classList.remove('mensagem-de-erro');
    }

    if(isNaN(nota1) || isNaN(nota2)){
        mensagemFinal.textContent = ` Porfavor, insira uma valor válido de 0 a 10.`
        mensagemFinal.classList.add('mensagem-de-erro');
        mensagemFinal.classList.remove('aprovacao');
        mensagemFinal.classList.remove('reprovacao');
    }

    if(nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10){
        mensagemFinal.textContent = ` Porfavor, insira uma valor válido de 0 a 10.`
        mensagemFinal.classList.add('mensagem-de-erro');
        mensagemFinal.classList.remove('aprovacao');
        mensagemFinal.classList.remove('reprovacao');
    }
}


function reiniciarCampo(event){
    event.preventDefault();

    document.querySelector('.nota1').value = '';
    document.querySelector('.nota2').value = '';

    let mensagemFinal = document.querySelector('.media-titulo');

    mensagemFinal.classList.remove('aprovacao');
    mensagemFinal.classList.remove('reprovacao');
    mensagemFinal.classList.remove('mensagem-de-erro');
    mensagemFinal.textContent = 'Sua média é: '
}
     

