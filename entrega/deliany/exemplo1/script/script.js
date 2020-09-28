//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não



     let input = document.querySelector("#newsInputEmail");
     let button = document.querySelector(".button");
     let mensagem = document.querySelector(".mensagem");

     button.addEventListener("click",function(event){ //o evento de click vai acionar a função

      event.preventDefault(); //sempre deve estar atrelado ao argumento da função
      let valorDoInput = input.value;

      if(valorDoInput == "") {
         mensagem.textContent = "Por favor preencha o campo de email";

      }else{
        mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`;
        ;

      }
    });


      // ESCREVER OS PASSOS PARA A REALIZAÇÃO DA TAREFA!

    
//       let emailValue = input.value;//imprime o valor que foi adicionado ao imput
//     //   console.log(input.value);
//     // // alert('o email + valorE00000000000000mail + foi cadastrado com sucesso);
//     // alert(`olá, seu email:  ${valorEmail} foi cadastrado com sucesso`);
//      let feedback = document.createElement("p")//criamos assim um elemento p para receber posteriormente uma mensagem
//      let messageFeedback = document.createTextNode(`olá, seu email:  ${emailValue} foi cadastrado com sucesso`);
//      console.log(feedback.appendChild(messageFeedback));
//      feedback.style.color = "green";

//      let colorTitle = document.querySelector(".news__title");
//      colorTitle.style.color = "red";
//      colorTitle.style.fontSize = "50px";


//      let userMessage = document.querySelector(".mensagem");
//      console.log(userMessage.appendChild(feedback)); 
//     //  ou posso usar userMessage.textContent = "oi";

//     // 4

// // 5

// // feedback.style.color = "green";

      
//      });