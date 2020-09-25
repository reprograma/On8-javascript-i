//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não


//Capturar o valor inserido no input quando acionar o botão

//let input = document.getElementById('newsInputEmail'); // usar quando for puxar só um elemento
//let button = document.querySelector('.button .news__button') // usar quando for pegar mais de um elemento

    

let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem')

button.addEventListener('click', function (event) {
    event.preventDefault();

    let valorDoInput = input.value

    if(valorDoInput == ''){
        mensagem.textContent = 'Por favor, preencha o campo de e-mail'
        mensagem.style.color = 'red'
    }else{
        mensagem.textContent = `Seu e-mail: ${valorDoInput} foi cadastrado com sucesso`
        input.value =''
        mensagem.style.color = 'green'
    }

});

//exemplos abaixo

//   let emailValue = input.value;
//   let feedback = document.createElement('p');
//   let messageFeedback = document.createTextNode(
//     `olá seu email ${emailValue} foi cadastrado com sucesso`
//   );
//   feedback.appendChild(messageFeedback);
  
//   //exemplo de css no js
//     // let colorTitle = document.querySelector('.news__title')
//     // colorTitle.style.color = 'pink'

//   let userMessage = document.querySelector('.mensagem');
//   userMessage.appendChild(feedback);

  // let userMessage = document.querySelector('.mensagem');
  // userMessage.textContent = 'oi';


  // let userMessage = document.querySelector('.mensagem');
  // userMessage.textContent = 'oi';

    
    //console.log(input.Value)

//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
        //alert('O e-mail' + ' ' + inputEmail + ' ' + 'foi cadastrado com sucesso')

        // alert(`Olá, seu email: ${valorEmail} foi cadastrado com sucesso` )

 //Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
       // let feedback = document.createElement('p') // criou o elemento
        //let messageFeedback = document.createTextNode('oi') // coloquei o conteúdo no elemento

 //Adicionar uma mensagem de sucesso personalizada com o email informado
            //let messageFeedback = document.createTextNode(`Olá, seu email: ${valorEmail} foi cadastrado com sucesso`) 

        //console.log(feedback.appendChild(messageFeedback)) // colocou o filho dentro do pai
        // let userMessage = document.querySelector('.mensagem')
           // userMessage.appendChild(feedback))







