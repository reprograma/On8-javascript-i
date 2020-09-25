//Capturar o valor inserido no input quando acionar o botão


//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão


//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão


//Adicionar uma mensagem de sucesso personalizada com o email informado


//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso


//Validar se os campos estão vazios ou não




// fazendo junto com a professora
// 1a questão

//let input = document.getElementById('newsInputEmail');
//let button = document.querySelector('.button');

  //let button = document.querySelector('.button.news__button');

   //console.log(input);

    //button.addEventListener('click',function(event){
    //event.preventDefault();

    // escrever os passos para realizar minha tarefa
    
    //console.log('clicou')

    // o que acontece no console?

   //console.log(input.value);

    // 2a questão - quero que ele retorne com mensagem
    //let valorEmail = input.value

    //alert('O ' + 'valor do email ' + input.value + ' foi cadastrado com sucesso');   
    //alert('O ' + 'valor do email ' + valorEmail + ' foi cadastrado com sucesso');


    //alert('Olá, seu email: ${valorEmail} foi cadastrado com sucesso');

    //let emailValue = input.value;
    //let feedback = documento.createElement('p');
    //let messageFeedback = document.createTextNode('Ola, seu email ${valorEmail} foi cadastrado com sucesso');
    
        //feedback.appendChild(messageFeedback);

    //console.log(feedback.appendChild(messageFeedbak));

       // let userMessage = document.querySelector('Mensagem');
        //console.log(userMessage.appenChild(feedback));

    //let userMessage = documento.querySelector('.mensagem');



//});

//let input = document.querySelector('#newsInputEmail');
//let button = document.querySelector('.button');

//button.addEventListener('click', function (event) {
  //event.preventDefault();
  //console.log(input.value);
//});



>> aqui a gente seleciona os elementos input e botão, adiciona o escutador de evento no botão e previne o comportamento padrão de refresh utilizando o prevent default

let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');

button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(input.value);
});

------------------------

>> aqui já conseguimos inserir o texto de feedback para o usuário informando que o email foi cadastrado

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

  let userMessage = document.querySelector('.mensagem');
  userMessage.appendChild(feedback);

  // let userMessage = document.querySelector('.mensagem');
  // userMessage.textContent = 'oi';
});
------------------------------------------
>> aqui adicionamos a estilização do CSS via js utilizando a propriedade style

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

-------------------------
>> aqui adicionamos e removemos classes de css do elemento ao invés de alterar o style no js

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
  colorTitle.classList.add('news__title__novo');
  // colorTitle.classList.remove('news__title');
  // colorTitle.style.color = 'red';
  // colorTitle.style.fontSize = '50px';

  let userMessage = document.querySelector('.mensagem');
  userMessage.appendChild(feedback);
  // let userMessage = document.querySelector('.mensagem');
  // userMessage.textContent = 'oi';
});