const botaoCalcular = document.querySelector('#button');
const mensagem = document.querySelector('.media-titulo');
const botaoApagar = document.querySelector('.clear');

function calculaMedia(n1, n2) {
  return Math.round((n1 + n2) / 2);
}

botaoCalcular.addEventListener('click', function (event) {
  event.preventDefault();
  const nota1 = parseFloat(document.querySelector('.nota1').value);
  const nota2 = parseFloat(document.querySelector('.nota2').value);
  let mediaFinal = calculaMedia(nota1, nota2);

  if (mediaFinal >= 7 && mediaFinal <= 10) {
    mensagem.textContent = `Parabéns! Você foi aprovado com a média é ${mediaFinal}`;
    mensagem.classList.add('aprovacao');
    mensagem.classList.remove('reprovacao');
    mensagem.classList.remove('mensagem-de-erro');
  }

  if (mediaFinal < 7 && mediaFinal >= 0) {
    mensagem.textContent = `Que pena, você tomou bomba. Sua média é ${mediaFinal}`;
    mensagem.classList.add('reprovacao');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('mensagem-de-erro');
  }

  if (isNaN(nota1) || isNaN(nota2)) {
    mensagem.textContent =
      'Preencha corretamente os campo, com valores numéricos entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
    mensagem.classList.remove('aprovacao');
    mensagem.classList.remove('reprovacao');
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    mensagem.textContent = 'Preecha com valores entre 0 e 10';
    mensagem.classList.add('mensagem-de-erro');
  }
});

botaoApagar.addEventListener('click', function (event) {
  event.preventDefault();

  document.querySelector('.nota1').value = '';
  document.querySelector('.nota2').value = '';

  mensagem.classList.remove('reprovacao');
  mensagem.classList.remove('aprovacao');
  mensagem.classList.remove('mensagem-de-erro');
  mensagem.textContent = 'Sua média é :';
});