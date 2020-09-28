//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não

let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem');


button.addEventListener('click', function (event) {
  event.preventDefault();
  let valorDoInput = input.value;

  if (valorDoInput == '') {
      mensagem.textContent = "Por favor, preencha o campo de email";
  } else {
      mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`;
  }
});
