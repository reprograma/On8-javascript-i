// Calculadora de média de provas
// Você irá construir uma aplicação web com os seguintes requisitos:

// Calcula o valor médio entre duas notas e informa ao aluno seu resultado quando o botão é acionado
// Resultados: APROVADO > 70%
// Resultados: REPROVADO < 70%

// Exibir na mensagem a média atual do aluno.
// Ex: Parabéns! Você foi aprovado com a média X
// Ex: Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é X

// Validar campos de input para não aceitar valores vazios e formatos inválidos

// ATENÇÃO - LEMBRE-SE QUE PARA TRANSFORMAR STRING(texto) EM NÚMERO É NECESSÁRIO UTILIZAR FUNÇÕES, PEQUISE parseInt ou parseFloat

const inputNota1=document.querySelector('.nota1');
const inputNota2=document.querySelector('.nota2');
const botaoMedia=document.getElementById('button');
const linhaMedia=document.querySelector('.media');
const buttonLimpar=document.getElementById('botaoLimpar')

botaoMedia.addEventListener('click', calcularMedia);
buttonLimpar.addEventListener('click', limparDados);

function calcularMedia (event){
    event.preventDefault();
    const n1= parseInt( inputNota1.value);
    const n2=parseInt( inputNota2.value);
    const media=Number((n1+n2)/2);    
    const resultado=document.createElement('div');
  
    if( media>=7 && media<=10){
        resultado.textContent=("Parabéns! Você foi aprovado com a média "+media);
        linhaMedia.appendChild(resultado);
        linhaMedia.classList.remove('reprovacao') 
        linhaMedia.classList.remove('mensagem-de-erro');
        let colorAprovacao = document.querySelector('.media');
        colorAprovacao.style.color = 'green';

    } else if (media<7 && media>=0) {
        resultado.textContent= ("Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é "+ media);
        linhaMedia.appendChild(resultado);
        linhaMedia.classList.remove('aprovacao');
        linhaMedia.classList.remove('mensagem-de-erro');
        let colorReprovacao = document.querySelector('.media');
        colorReprovacao.style.color = 'red';        
  }
   else if(isNaN(inputNota1) || isNaN(inputNota2)){
    resultado.textContent= 'Preencha corretamente os campo, com valores numéricos entre 0 e 10.';
    linhaMedia.classList.add('mensagem-de-erro');
    linhaMedia.classList.remove('aprovacao');
    linhaMedia.classList.remove('reprovacao');
    linhaMedia.appendChild(resultado);
  }  
  else if((inputNota1 < 0) || (inputNota1 > 10) || (inputNota2 < 0 )|| (inputNota2 > 10)) {
    resultado.textContent = 'Preecha com valores entre 0 e 10.';
    linhaMedia.classList.add('mensagem-de-erro');
   linhaMedia.classList.remove('aprovacao');
    linhaMedia.classList.remove('reprovacao');
    linhaMedia.appendChild(resultado);
  }
}
function limparDados(event){
    event.preventDefault();
    document.querySelector('.nota1').value='';
    document.querySelector('.nota2').value='';
    linhaMedia.classList.remove('reprovacao')
    linhaMedia.classList.remove('aprovacao')
    linhaMedia.classList.remove('mensagem-de-erro')
    linhaMedia.textContent=''
}