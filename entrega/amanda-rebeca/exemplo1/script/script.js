//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não


let submitButton = document.querySelector(".news .news__button");

submitButton.addEventListener("click", function(e){
    e.preventDefault();

    let emailContainer = document.getElementById('newsInputEmail');
    let emailValue = emailContainer.value;

    let feebackContainer = document.createElement('p');
    let successMessage = document.createTextNode(`Olá, seu email: ${emailValue} foi cadastrado com sucesso!`);

    let userMessage = document.querySelector('.mensagem');

    feebackContainer.appendChild(successMessage);
    userMessage.appendChild(feebackContainer);
});

