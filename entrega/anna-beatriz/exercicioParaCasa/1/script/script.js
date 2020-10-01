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

const botaoCalculo = document.querySelector("#button");
const mediaMensagem = document.querySelector(".media-titulo");

function mediaCalculo (n1, n2) {
    return Math.round((n1+n2)/2);    
}

botaoCalculo.addEventListener("click", function(event){
    event.preventDefault();
    let nota1 = parseFloat(document.querySelector(".nota1").value);
    let nota2 = parseFloat(document.querySelector(".nota2").value);
    let mediaFinal = mediaCalculo(nota1, nota2);

    if (mediaFinal >= 7 && mediaFinal <= 10) {
        mediaMensagem.innerHTML = `Parabéns, você foi APROVADO com média ${mediaFinal}!`;
        mediaMensagem.classList.add("aprovacao");
        mediaMensagem.classList.remove("reprovacao");
        mediaMensagem.classList.remove("mensagem-de-erro");
    }

    if (mediaFinal < 7 && mediaFinal >= 0) {
        mediaMensagem.innerHTML = `Sorry, você foi REPROVADO com média ${mediaFinal}!`;
        mediaMensagem.classList.remove("aprovacao");
        mediaMensagem.classList.add("reprovacao");
        mediaMensagem.classList.remove("mensagem-de-erro");        
    }

    if (isNaN(nota1) || isNaN(nota2)) {
        mediaMensagem.innerHTML = `Favor preencher novamente os campos com valores númericos entre 0 e 10`;
        mediaMensagem.classList.remove("aprovacao");
        mediaMensagem.classList.remove("reprovacao");
        mediaMensagem.classList.add("mensagem-de-erro")
    }

    if (nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0) {
        mediaMensagem.innerHTML = `Favor preencher novamente os campos com valores númericos entre 0 e 10`;
        mediaMensagem.classList.remove("aprovacao");
        mediaMensagem.classList.remove("reprovacao");
        mediaMensagem.classList.add("mensagem-de-erro") 
    }

});






