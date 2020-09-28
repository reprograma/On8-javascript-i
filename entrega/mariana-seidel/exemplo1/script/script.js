//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não


let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem') ;

button.addEventListener("click",function(event){
    event.preventDefault();
    let valorDoInput = input.value;

    if (valorDoInput ==''){
        mensagem.textContent = 'Por favor, preencha o campo de email abaixo';
        mensagem.style.color = 'red'
    } else {
        mensagem.textContent = `Olá, seu email: ${valorDoInput} foi cadastrado com sucesso!`;
        mensagem.style.color = 'green'
        input.value = '';
    }
})



/* // RESULUÇÃO A <DIV> //
let emailValue = input.value
    let feedback = document.createElement('p'); //pra criar um novo elemento [element], que no caso é o <p>.
    let messageFeedback = document.createTextNode(`Olá seu e-mail ${emailValue} foi cadastrado com sucesso!`)  //pra criar o texto [text] que vai estar dentro do <p> criado acima.
    feedback.appendChild(messageFeedback) // o appendChild é pra colocar o text dentro do element criado.
    feedback.style.color = 'blue' // pra alterar o style do text, nesse caso a cor da variável que eu chamei "feedback" (que contém o <p>)

    let colorTitle = document.querySelector('.news__title')
    colorTitle.classList.add('news__title__novo') // nesse caso, você adiciona uma classe no css com os estilos que você quer e agora apenas relaciona a variável à classe nova.
    //colorTitle.style.color = 'red';
    //colorTitle.style.fontSize = '40px';

    let userMessage = document.querySelector('.mensagem');
    userMessage.appendChild(feedback);

    // userMessage.textContent = 'oi; // nesse caso não precisaria da <div> no htlm e sim da tag <p>. Também não precisaria dos passos acima de criar element, text e colocar um dentro do outro!
    
    //console.log(input.value);
    //alert('Email cadastrado com sucesso');
   // alert(`O email ${valorEmail} foi cadastrado com sucesso`);
   */