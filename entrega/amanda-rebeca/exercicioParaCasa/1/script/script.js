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

function calcularMedia(a, b) {
    return ((a+b)/2).toFixed(2)
}

let submitButton = document.querySelector("#button");
let message = document.querySelector(".media-titulo");

submitButton.addEventListener("click", function(e){
    e.preventDefault();

    let nota1 = parseFloat(document.querySelector('.nota1').value);
    let nota2 = parseFloat(document.querySelector('.nota2').value);

    if(!isNaN(nota1) && !isNaN(nota2)) {
        if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            message.textContent = `Preencha os campos com valores entre 0 e 10`
        } else {
            let mediaFinal = calcularMedia(nota1, nota2);
            if(mediaFinal >= 7 && mediaFinal <= 10) {
                message.textContent = `Parabéns! Você foi aprovado com a média ${mediaFinal}`
            } else {
                message.textContent = `Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é ${mediaFinal}`
            } 
        }
    } else {
        message.textContent = `Preencha corretamente com valores numéricos entre 0 e 10!`
    }
});