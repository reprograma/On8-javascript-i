let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem');

//validaçao simples
button.addEventListener('click', function (event) {
    event.preventDefault();

    let valordDoInput = input.value;

    if (valordDoInput == '') {
        mensagem.textContent = 'Por favor, Preencha o campo de email:';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = `O email: ${valordDoInput} foi CADASTRADO com SUCESSO.`;
        input.value = '';
        mensagem.style.color = 'green';
    }

});

/*
    let valorEmail = input.value;
    let feedback = document.createElement('p');
    let messageFeedback = document.createTextNode(`O email ${valorEmail} foi cadastrado com sucesso.`);
    feedback.appendChild(messageFeedback);
    feedback.style.color = 'green';


    let userMessage = document.querySelector('.mensagem');
    userMessage.appendChild(feedback);

    */
//Capturar o valor inserido no input quando acionar o botão OKKK
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão OKK
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão OKK
//Adicionar uma mensagem de sucesso personalizada com o email informado OKK
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso OKK
//Validar se os campos estão vazios ou não OKK