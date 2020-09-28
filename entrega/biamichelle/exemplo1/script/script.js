//Capturar o valor inserido no input quando acionar o botão

let input = document.getElementById('newsInputEmail');


//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão

let button = document.querySelector('.button.news__button');


let mensagem = document.querySelector('.mensagem'); //eu coloquei esse bagulho aqui para poder fazer o role da validação simples
// console.log(mensagem);

button.addEventListener("click", function (event){
    event.preventDefault();
    // let valorEmail = input.value;

    // console.log(input.value);
    // alert('Seu email foi cadastrado com sucesso');
    // alert('o email ' + valorEmail + ' foi cadastrado com sucesso');

/* Existe um forma mais moderna de fazer isso usando o template string*/

    // alert(`Olá, seu email: ${valorEmail} foi cadastrado com sucesso`);

//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão

    // let feedback = document.createElement('p');
    // let messageFeedback = document.createTextNode('oi');
    // feedback.appendChild(messageFeedback);
    

    // let userMessage = document.querySelector('.mensagem');
    // userMessage.appendChild(feedback);

//rescrevendo o codigo para a validacão simples
    //Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
    //Validar se os campos estão vazios ou não

    let valorDoInput = input.value;
    console.log(valorDoInput);

    if(valorDoInput == ''){
        mensagem.textContent = "Por favor, preencha o campo email";
        // mensagem.style.color = 'red';
        mensagem.classList.add('error');
    } else{
        mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`;
        mensagem.style.color = 'green';
        input.value = '';
    }


//rescrevendo o codigo para validação de maneira mais complexo utilizando append.child


});



//Adicionar uma mensagem de sucesso personalizada com o email informado

/* Forma que perdi a explicação

let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');

button.addEventListener('click', function (event) {
  event.preventDefault();
  let emailValue = input.value;
  let feedback = document.createElement('p');
  let messageFeedback = document.createTextNode(
    `olá seu email ${emailValue} foi cadastrado com sucesso`
  );
  feedback.appendChild(messageFeedback);
  feedback.style.color = 'green';

  let colorTitle = document.querySelector('.news__title');
  colorTitle.style.color = 'red';
  colorTitle.style.fontSize = '50px';

  let userMessage = document.querySelector('.mensagem');
  userMessage.appendChild(feedback);
  // let userMessage = document.querySelector('.mensagem');
  // userMessage.textContent = 'oi';
});
*/


