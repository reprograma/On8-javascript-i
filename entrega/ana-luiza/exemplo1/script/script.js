// Capturar o valor inserido no input quando acionar o botão:

// let input = document.getElementById('newsInputEmail');

// let button = document.querySelector('.button.news__button')

// console.log(input, button)

// Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão:

// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     let valorEmail = input.value
//     alert(`Obrigada! Seu e-mail: ${valorEmail} foi cadastrado com sucesso!`)
// })

// Adicionar um novo campo para a mensagem de sucesso quando acionar o botão:
// Adicionar uma mensagem de sucesso personalizada com o email informado:

// let input = document.getElementById('newsInputEmail');

// let button = document.querySelector('.button.news__button')

// console.log(input, button)

// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     let valorEmail = input.value;
//     let feedback = document.createElement('p'); // criar um elemento
//     let messageFeedback = document.createTextNode(`Obrigada! Seu e-mail: ${valorEmail} foi cadastrado com sucesso!`); // criar um texto
//     (feedback.appendChild(messageFeedback)); // inserir o texto filho do elemento pai (<p>)

//     let userMessage = document.querySelector('.mensagem');
//     console.log(userMessage.appendChild(feedback));
// })

// Alterar a cor do texto caso o email tenha sido cadastrado com sucesso:

// let input = document.getElementById('newsInputEmail');

// let button = document.querySelector('.button.news__button')

// console.log(input, button)

// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     let valorEmail = input.value;
//     let feedback = document.createElement('p'); // criar um elemento
//     let messageFeedback = document.createTextNode(`Obrigada! Seu e-mail: ${valorEmail} foi cadastrado com sucesso!`); // criar um texto
//     (feedback.appendChild(messageFeedback)); // inserir o texto filho do elemento pai (<p>)
//     feedback.style.color = 'green';
//     feedback.style.fontWeight = 'bold';
//     feedback.style.textTransform = 'uppercase'

//     let colorTitle = document.querySelector('.news__title');
//     colorTitle.style.color = 'black';
//     // colorTitle.classList.add('news__title__novo');

//     let userMessage = document.querySelector('.mensagem');
//     console.log(userMessage.appendChild(feedback));
// })

// Validar se os campos estão vazios ou não:

// let input = document.querySelector('#newsInputEmail');
// let button = document.querySelector('.button')
// let message = document.querySelector('.mensagem')

// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     let inputValue = input.value;

//     if (inputValue == '') {
//         message.textContent = 'Por favor, preencha o campo do e-mail.'
//         message.style.color = 'red';
//         message.style.fontWeight = 'bold';
//         message.style.textTransform = 'uppercase'
//     } else {
//         message.textContent = `Obrigada! Seu e-mail: ${inputValue} foi cadastrado com sucesso!`
//         message.style.color = 'green';
//         message.style.fontWeight = 'bold';
//         message.style.textTransform = 'uppercase'    
//     }
    
// })

















