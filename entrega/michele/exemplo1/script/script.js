//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não

//=========================validaçao===================

let input=document.querySelector("#newsInputEmail");
let button=document.querySelector(".button");
let mensagem=document.querySelector('.mensagem');


button.addEventListener("click",function (event){
    event.preventDefault();
    let valorDoInput=input.Value;

    if (valorDoInput=='') {
      mensagem.textContent= 'Preencha o campo vazio de Email'; 
      mensagem.style.color='red'
    }else{
      mensagem.textContent='Seu email foi cadastrado com sucesso'
      mensagem.style.color='green'
      input.Value='';
    };

  });

  //obs: ta dando erro no campo de mensagem 

/*
>>validação simples

let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem');

button.addEventListener('click', function (event) {
  event.preventDefault();
  let valorDoInput = input.value;

  if (valorDoInput == '') {
    mensagem.textContent = 'Por favor, preencha o campo de email';
    mensagem.style.color = 'red';
  } else {
    mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`;
    mensagem.style.color = 'green';
    input.value = '';
  }
});
*/





















/*
let input=document.querySelector("#newsInputEmail");
let button=document.querySelector(".button");

button.addEventListener("click",function (event){
    event.preventDefault();
    let valorEmail=input.value;
    let feedback=document.createElement('p');
   let mesageFeedback=document.createTextNode('Olá seu email  ${valorEmail}  foi cadastrado com sucesso');
  feedback.appendChild(mesageFeedback);
  feedback.style.color="black";

  let colorTitle=document.querySelector('.news__title')
  colorTitle.style.color='pink';
  colorTitle.style.fontSize='20px'

  let userMessage=document.querySelector('.mensagem');
  userMessage.appendChild(feedback);

});*/