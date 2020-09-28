//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não

// console.log(input.value);
//alert('O email ' + input.value + ' foi cadastrado com sucesso!')

//let input = document.getElementById('newsInputEmail');
//let button =  document.querySelector('.button')

//button.addEventListener("click",function(event){
  //event.preventDefault();
  //let emailValue = input.value;
  //let feedback = document.createElement ('p');
//let message = document.createTextNode (`Olá seu email ${emailValue} foi cadastrado com sucesso`);
  //console.log (feedback.appendChild(message));

  //let userMessage = document.querySelector ('.mensagem')
  //userMessage.appendChild(feedback)
//});
let input = document.getElementById('newsInputEmail');
let button =  document.querySelector('.button')
let mensagem = document.querySelector('.mensagem')

button.addEventListener('click', function(event) {
  event.preventDefault();
  let valorInput = input.value;

  if(valorInput == ''){
      mensagem.textContent = 'Por favor, preencha o campo de email';
  } else {
      mensagem.textContent = `Olá seu email ${valorInput} foi cadastrado com sucesso`;
  }
})
