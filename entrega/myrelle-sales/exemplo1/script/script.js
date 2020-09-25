//Capturar o valor inserido no input quando acionar o botão

let input = document.getElementById('newsInputEmail');
let button = document.querySelector('.button.news__button');
// evento 
let mensagem = document.querySelector('.mensagem');

3
button.addEventListener('click', function(event) {
  event.preventDefault()
  let valorDoInput = input.value;

  if(valorDoInput == ''){
    mensagem.textContent = 'Por favor, preencha o campo de email';
    mensagem.style.color = 'red';
    }else{
      mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`;
      mensagem.style.color = 'green';
      input.value = '';

  }
  
  
  
  // console.log('clicou');
//   let emailValue = input.value;
//   let feedback = document.createElement('p');
//   let messageFeedback = document.createTextNode(`Olá, seu email ${emailValue} foi cadastrado com sucesso`);
//   feedback.appendChild(messageFeedback);
//   feedback.style.color = 'green';

//   let colorTitle = document.querySelector('.news__title');
//   colorTitle.style.color = 'red';

//   let userMessage = document.querySelector('.mensagem');
// // console.log(userMessage);
//   console.log(userMessage.appendChild(feedback));

  // console.log(feedback.appendChild(messageFeedback));
  // console.log(input.value);
  // alert('O email ' + input.value + ' foi cadastrado com sucesso');

  // alert(`Olá, seuemail: ${valorEmail} foi cadastrado com sucesso`)  template string
})


//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não
