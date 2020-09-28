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

let inputNota1 = document.querySelector('.nota1')
let inputNota2 = document.querySelector('.nota2')
let botao = document.querySelector('#button')
let span = document.querySelector('.media')

botao.addEventListener('click', calcularMedia)

function calcularMedia(event) {
    event.preventDefault();

    let texto = document.createElement('p')
    let nota1 = parseFloat(inputNota1.value)
    let nota2 = parseFloat(inputNota2.value)
    let mediaCalculo = parseFloat((nota1 + nota2) / 2)

    if (mediaCalculo >= 7 && mediaCalculo <= 10) {

        span.textContent = ` ${mediaCalculo} Parabéns! Você foi aprovado(a) por média!`
        span.appendChild(texto)
        span.style.color = 'green'
        span.style.fontWeight = 'bold'
        span.style.textTransform = 'uppercase'

    } else if (mediaCalculo < 7) {

        span.textContent = ` ${mediaCalculo} Infelizmente você não atingiu a nota mínima para aprovação.`
        span.appendChild(texto)
        span.style.color = 'red'
        span.style.fontWeight = 'bold'
        span.style.textTransform = 'uppercase'

    } if (inputNota1.value == '' || inputNota2.value == '') {

        span.textContent = 'Por favor, preencha os campos das notas!'
        span.style.color = 'black'
        span.style.fontWeight = 'bold'
        span.style.textTransform = 'uppercase'

    }

}



// Resolução de Bárbara:

// const botaoCalcular = document.querySelector('#button')
// const mensagem = document.querySelector('.media-titulo')

// function calculaMedia(n1, n2) {
//     return Math.round((n1 + n2) / 2)
// }

// botaoCalcular.addEventListener('click', function(event) {    
//     event.preventDefault();    
//     const nota1 = parseFloat(document.querySelector('.nota1').value)
//     const nota2 = parseFloat(document.querySelector('.nota2').value)
//     const mediaFinal = calculaMedia(nota1, nota2)

//     if(mediaFinal >= 7 && mediaFinal <= 10) {
//         mensagem.textContent = `Parabéns! Você foi aprovado com a média: ${mediaFinal}`
//         mensagem.classList.add('aprovacao')
//         mensagem.classList.remove('reprovacao')
//         mensagem.classList.remove('mensagem-de-erro')
//     }
    
//     if(mediaFinal < 7 && mediaFinal >= 0) {
//         mensagem.textContent = `Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é: ${mediaFinal}`
//         mensagem.classList.add('reprovacao')
//         mensagem.classList.remove('aprovacao')
//         mensagem.classList.remove('mensagem-de-erro')
//     } 

//     if(NaN(nota1) || NaN(nota2)) {
//         mensagem.textContent = `Preencha corretamente com valores numéricos entre 0 e 10!`
//         mensagem.classList.add('mensagem-de-erro')
//         mensagem.classList.remove('aprovacao')
//         mensagem.classList.remove('reprovacao')
//     }

//     if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
//         mensagem.textContent = `Preencha com valores entre 0 e 10`
//         mensagem.classList.add('mensagem-de-erro')
//     }
// })

// botaoApagar.addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('.nota1').value = ''
//     document.querySelector('.nota2').value = ''
//     mensagem.classList.remove('aprovacao')
//     mensagem.classList.remove('reprovacao')
//     mensagem.classList.remove('mensagem-de-erro')
//     mensagem.textContent = `Sua média é: `
// })































