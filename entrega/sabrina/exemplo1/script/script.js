// // selecionar o input e botão
// let input = document.getElementById('newsInputEmail');
// let button = document.querySelector('.button.news__button')

// // adicionar evento = click
// // ler o evento no botão de click e executar a função
// button.addEventListener('click',function(evento){

//     // tirar o evento padrão do navegador (de quando clica no botão no Form, a página da refresh)
//     evento.preventDefault();

//     //Capturar o valor inserido no input quando acionar o botão
//     // console.log(input.value)

//     // dar um nome pra variavel do input
//     let valorEmail = input.value;

//     //Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão

//     // alert('O e-mail ' + valorEmail + ' foi cadastrado com sucesso!');
//     // ou
//     // alert (`Olá, seu e-mail: ${valorEmail} foi cadastrado com sucesso!`)

//     //Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//     // criar tag p e dar nome a variavel, criar texto dentro do p e associar o p a classe da div do html 
//     let feedback = document.createElement('p')
    
//     let messageFeedback = document.createTextNode
//     //Adicionar uma mensagem de sucesso personalizada com o email informado
//     (`Olá, seu email ${valorEmail} foi cadastrado com sucesso!`);

//     feedback.appendChild(messageFeedback);
//     feedback.style.backgroundColor = "red";

//     let colorTitle = document.querySelector('.news__title');
//     colorTitle.classList.add('news__title__novo');

//     let userMessage = document.querySelector('.mensagem');
//     console.log(userMessage.appendChild(feedback));


// })

// //Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
// //Validar se os campos estão vazios ou não


let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem')

button.addEventListener('click', function(event) {
    event.preventDefault();
    let valorDoInput = input.value;

    if(valorDoInput == ''){
        mensagem.textContent = "Por favor, preencha o campo de e-mail!"
        mensagem.classList.add('erro');
    }
    else {
        mensagem.textContent = `Seu e-mail: ${valorDoInput} foi cadastrado com sucesso!`;
        mensagem.classList.add('certo');

        input.value = '';
    }
})
