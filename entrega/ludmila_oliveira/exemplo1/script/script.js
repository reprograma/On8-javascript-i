//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não


// let imput = document.querySelector('#newsInputEmail');
// let button = document.querySelector('.news__button');

// button.addEventListener('click',function(event){ //o evento de click vai acionar a função
//     event.preventDefault() //sempre deve estar atrelado ao argumento da função
    
//     // ESCREVER OS PASSOS PARA A REALIZAÇÃO DA TAREFA!

//     let emailValue = imput.value //imprime o valor que foi adicionado ao imput

//     let feedback = document.createElement('p'); //criamos assim um elemento <p> para receber posteriormente uma mensagem
//     feedback.style.color = 'green' //estilizando apenas aqui no JS

//     let messageFeedback = document.createTextNode(`Olá serzinho, seu email ${emailValue} foi cadastrado com sucesso! :)`); // criamos a mensagem que será inserida no <p> criado acima

//     feedback.appendChild(messageFeedback); // Essa mensagem vai ficar sendo repetida sempre que for acionada, sem sobrescrever.

//     // let userMessage = document.querySelector('.mensagem'); // estamos chamando a classe do html onde a mensagem criada para o <p> vai ficar (obs: isso se lá fosse uma div)
//     // userMessage.appendChild(feedback);

//     let colorTitle = document.querySelector('.news__title');
//     colorTitle.classList.add('news__title__novo'); // estilizando no CSS e conectando aqui no JS (outra forma de estilizar)

// });



// EXEMPLO ABAIXO COM CÓDIGO MAIS LIMPO!


let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.news__button');
let mensagem = document.querySelector('.mensagem');

button.addEventListener('click',function(event){ 
    event.preventDefault();

    let valorDoInput = input.value;

    if(valorDoInput == '') {
        mensagem.textContent = 'Por favor, preencha o campo de e-mail.'    //Assim a mensagem aparece apenas uma vez, sobrescrevendo a anterior.            
    } else {
        mensagem.textContent = `Seu e-mail ${input.value} foi cadastrado com sucesso!`
        input.value = '';
    }

});