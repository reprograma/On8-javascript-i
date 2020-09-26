//DESAFIO NÃO É OBRIGATÓRIO
// NÃO VALE PONTO
// É APENAS UM DESAFIO PARA QUEBRAR A CABEÇA UM POUCO RS
// FAÇA NO SEU TEMPO, PARA TREINAR E APROFUNDAR EM DOM

// ESSE É O TWITTER CLONE E QUEREMOS REALIZAR ALGUMAS TAREFAS:
// -OS TWEETS CRIADOS DEVEM SER INSERIDOS NO FEED ABAIXO DO TWEET FIXADO
// -É NECESSÁRIO VALIDAR OS CAMPOS PARA NÃO ENVIAR TWEETS VAZIOS
// -LIMPAR O CAMPO DE INPUT APÓS O ENVIO DO TWEET
// -INSERIR EVENTO DE TECLADO PARA VALIDAR O NÚMERO DE CARACTERES DIGITADOS
// -EXIBIR NO CONTADOR A CONTAGEM REGRESSIVA DE UTILIZAÇÃO DOS CARACTERES
// -QUANDO FALTAR 5 CARACTERES ALTERAR A COR DO NÚMERO DO CONTADOR PARA VERMELHO
// -QUANDO O CONTADOR ATINGIR 0 O BOTÃO DE TWEET DEVE SER DESABILITADO

let botaoTwettar = document.querySelector('.button')
let timeline = document.querySelector('.tweets-timeline')
let timelineBox = document.querySelector('.tweets-timeline__box')
let inputTweet = document.querySelector('#tweetComposerInput')
let contadorCaractere = document.querySelector('#tweetComposerCounter')


botaoTwettar.addEventListener('click', publicarTweet)

function publicarTweet(event) {
    event.preventDefault();

    let tweet = document.createElement('div')
    
    tweet.textContent = `${inputTweet.value}`
    timelineBox.appendChild(tweet)

}

