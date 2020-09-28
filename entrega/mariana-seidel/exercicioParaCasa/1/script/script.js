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
let mediaTexto = document.querySelector('.media-titulo')

button.addEventListener('click', calcularMedia)

function calcularMedia (event){
    event.preventDefault();

    let Nota1 = parseFloat(inputNota1.value)
    let Nota2 = parseFloat(inputNota2.value)
    let paragrafo = document.createElement('p')
    let media = Math.round((Nota1 + Nota2)/2);

    if(media >= 7 && media <=10){
        mediaTexto.textContent = `Parabéns! Você foi aprovado com a média ${media}`;
        mediaTexto.appendChild(paragrafo);
        mediaTexto.classList.add('aprovacao');
        mediaTexto.classList.remove('reprovacao');
        mediaTexto.classList.remove('mensagem-de-erro');
    } else if (media < 7 && media >=0){
        mediaTexto.textContent = `Infelizmente, você não atingiu a nota máxima para aprovação. Sua média é ${media}`;
        mediaTexto.appendChild(paragrafo);
        mediaTexto.classList.add('reprovacao');
        mediaTexto.classList.remove('aprovacao');
        mediaTexto.classList.remove('mensagem-de-erro');
    }


    if(isNaN(Nota1) || isNaN(Nota2)) {
        mediaTexto.textContent = `Preencha corretamente os campos com valores entre 0 e 10.`
        mediaTexto.classList.add('mensagem-de-erro');
        mediaTexto.classList.remove('aprovacao');
        mediaTexto.classList.remove('reprovacao');
    }

    if(Nota1 < 0 || Nota1 > 10 || Nota2 < 0 || Nota2 > 10){
        mediaTexto.textContent = `Preencha os campos com valores entre o 0 e 10!`;
        mediaTexto.classList.add('mensagem-de-erro');
        mediaTexto.classList.remove('aprovacao');
        mediaTexto.classList.remove('reprovacao');
    }

}


/* // RESOLUÇÃO AULA //
let botao = document.querySelector('#button')
let mediaTexto = document.querySelector('.media-titulo')
let botaoApagar = document.querySelector('.clear') // colocar a classe do botão que eu criar no html!

function calcularMedia(n1+n2){
    return Math.round((n1+n2)/2);
}

botaoCalcular.addEventListener('click', function (event){
    event.preventDefault();
    let nota1 = parseFloat(document.querySelector('.nota1').value)
    let nota2 = parseFloat(document.querySelector('.nota2').value)
    let mediaFinal = calcularMedia(nota1,nota2)

    if(mediaFinal >= 7 && mediaFinal <=10){
        mediaTexto.textContent = `Parabéns! Você foi aprovado com a média ${mediaFinal}`;
        mediaTexto.classList.add('aprovacao');
        mediaTexto.classList.remove('reprovacao');
        mediaTexto.classList.remove('mensagem-de-erro');
    }

    if(mediaFinal < 7 && mediaFinal >= 0){
        mediaTexto.textContent = `Infelizmente, você não atingiu a nota máxima para aprovação. Sua média é ${mediaFinal}`;
        mediaTexto.classList.add('reprovacao');
        mediaTexto.classList.remove('aprovacao');
        mediaTexto.classList.remove('mensagem-de-erro');
    }

    if(isNaN(nota1) || isNaN(nota2)) {
        mediaTexto.textContent = `Preencha corretamente os campos com valores entre 0 e 10`
        mediaTexto.classList.add('mensagem-de-erro');
        mediaTexto.classList.remove('aprovacao')
        mediaTexto.classList.remove('reprovacao')

    }

    if(nota1<0 || nota1>10 || nota2<0 || nota2>10){
        mediaTexto.textContent = `Preencha com valores entre o 0 e 10`;
        mediaTexto.classList.add('mensagem-de-erro');
    }
});

botaoApagar.addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('.nota1).value = '';
    document.querySelector('.nota2).value = '';

    mediaTexto.classList.remove('reprovacao')
    mediaTexto.classList.remove('aprovacao')
    mediaTexto.classList.remove('mensagem-de-erro')
    mediaTexto.textContent = 'Sua média é: ';

})

*/

