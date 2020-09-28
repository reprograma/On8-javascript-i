//Capturar o valor inserido no input quando acionar o botão // selecionar o input e o botão//
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
    
    if(valorDoInput == ''){
        mensagem.textContent = 'Por favor, preencha o campo de e-mail.'
    }else{
        mensagem.textContent = `Seu e-mail: ${valorDoInput} foi cadastrado com sucesso.`;
        input.value = '';
    }


    //let valorEmail = input.value;
    //let feedback = document.createElement('p');
    //let messageFeedback = document.createTextNode(
      //  `Olá, seu e-mail ${valorEmail} foi cadastrado com sucesso.`
   // );
    //feedback.appendChild(messageFeedback);

    //feedback.style.color = "green";

    

   // let userMessage = document.querySelector('.mensagem');
    //userMessage.appendChild(feedback);



    //console.log(input.value);//
    //alert(`Olá, seu e-mail: ${valorEmail} foi cadastrado com sucesso`);//
});