//Capturar o valor inserido no input quando acionar o botão
//Retornar em um pop-up uma mensagem de sucesso para o usuário quando acionar o botão
//Adicionar um novo campo para a mensagem de sucesso quando acionar o botão
//Adicionar uma mensagem de sucesso personalizada com o email informado
//Alterar a cor do texto caso o email tenha sido cadastrado com sucesso
//Validar se os campos estão vazios ou não

let input = document.getElementById('newsInputEmail')
let button = document.querySelector('.button')
let mensagem = document.querySelector( '.mensagem' )

button.addEventListener('click',function(event){
    event.preventDefault()
    let emailValue = input.value 
    
    if (valorDoInput == ' '){
      mensagem.textContent = "Por favor, preencha o campo de email"

    } else { 
      mensagem.textContent =  `Seu email ${valorDoInput} foi cadastrado com sucesso`
    }

    //console.log(input.value)
    //alert('O email ' + valorEmail + ' foi cadastrado com sucesso')
    //alert('Olá, seu email:  ${valorEmail} foi cadastrado com sucesso')
    //let feedback = document.createElement('p')
    //let messageFeedback = document.createTextNode (
       // `olá seu email ${emailValue} foi cadastrado com sucesso`
        //)
    //console.log(feedback.appendChild (messageFeedback))

  //Modificar a cor do texto

    feedback.appendChild(messageFeedback)
    feedback.style.color = 'green'
    input.value = ''

   // let colorTitle = document.querySelector('.new__title')
    //colorTitle.style.color = 'red'
    //colorTitle.style.fontSize = '50px'
    // colorTitle.classlist.add(new__title__novo)
    //colorTitle.classlist.remove(new__title__novo)

    //let userMassage = document.querySelector('.mensagem')
    //userMassage.appendChild(feedback)
     
    //criar tag div e dentro criar uma p
    //let userMassage = document.querySelector('.mensagem')
   //console.log(userMassage.appendChild(feedback))

   // let userMassage = document.que(.mensagem)
    //userMassage.textContent = 'Oi'
});