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

const valorText = document.querySelector('.tweet-composer__input');
const button = document.querySelector('.button.tweet-composer__button');
const tweetBox = document.querySelector('.tweets-timeline__box');
const contadorDecremento = document.querySelector('.tweet-composer__counter');
const cabecalho = document.querySelector('.tweets-timeline__header');



button.addEventListener("click", function(event){
    event.preventDefault();

    if (valorText.value){

        const novoTweet = document.createElement('p');
        novoTweet.className = 'tweets-timeline__tweet';
        novoTweet.innerText = valorText.value;
    
        const novoCabecalho = cabecalho.cloneNode(true);
        novoCabecalho.childNodes[1].innerText = 'Biamichelle'
        novoCabecalho.childNodes[3].innerText = '@BiaM'
        tweetBox.appendChild(novoCabecalho);
        tweetBox.appendChild(novoTweet);

        valorText.value = '';
    }

})

valorText.addEventListener("input", function(event){
    event.preventDefault();

    const valorContador = 280 - valorText.value.length;
    
    contadorDecremento.innerText = valorContador;

    if(valorContador <= 5){
        contadorDecremento.classList.add('contador5')
    } else {
        contadorDecremento.classList.remove('contador5')
    }

    if(valorContador <=0){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})