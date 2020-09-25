// Calculadora de média de provas
// Você irá construir uma aplicação web com os seguintes requisitos:

// Calcula o valor médio entre duas notas e informa ao aluno seu resultado quando o botão é acionado
// Resultados: APROVADO > 70%
// Resultados: REPROVADO < 70%

let prova1 = document.getElementById('prova1');
let prova2 = document.getElementById('prova2');
let botao = document.getElementById('button');
let aviso = document.querySelector('.media__paragrafo');
let avisoMedia = document.querySelector('.media');

botao.addEventListener('click', function(){
    let valor1 = Number(prova1.value);
    let valor2 = Number(prova2.value);

    let media = (valor1+valor2) /2  

    if (valor1 == "" || valor2 == "" )  {
        aviso.classList.add('media__paragrafo_show')
        aviso.style.color = 'red';

        aviso.textContent = 'Preencha os campos corretamente.'
    }
    else if(valor1 > 10 || valor2 > 10) {
        aviso.classList.add('media__paragrafo_show')
        aviso.style.color = 'red';

        aviso.textContent = 'Digite valores somente entre 0 e 10.'
    }
    else if (media<7){
        aviso.classList.add('media__paragrafo_show')
        aviso.style.color = 'black';

        aviso.textContent = `Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é ${media}.`
    }

    else if (media>7){
        aviso.classList.add('media__paragrafo_show')
        aviso.style.color = 'rgb(13, 148, 13)';

        aviso.textContent = `Parabéns! Você foi aprovado com a média ${media}!`
    } 
})



// Exibir na mensagem a média atual do aluno.
// Ex: Parabéns! Você foi aprovado com a média X
// Ex: Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é X

// Validar campos de input para não aceitar valores vazios e formatos inválidos

// ATENÇÃO - LEMBRE-SE QUE PARA TRANSFORMAR STRING(texto) EM NÚMERO É NECESSÁRIO UTILIZAR FUNÇÕES, PEQUISE parseInt ou parseFloat
