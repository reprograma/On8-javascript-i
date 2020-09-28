//adicionar um novo gasto nos inputs e ao clicar o botão adicionar as informações devem aparecer abaixo do campo relatório de gastos

// validar os três campos de input para que nenhum valor vazio possa ser adicionado
/*

const inputGasto=document.getElementById('transacaoInputName');
const inputValor=document.getElementById('transacaoInputMoney');
const inputData=document.getElementById('transacaoInputDate')
const botao=document.querySelector('.button');
const extrato=document.querySelector('.extrato');

botao.addEventListener('click', criarTransacao);

function criarTransacao(event){
    event.preventDefault();
    console.log(inputGasto.value, inputValor.value, inputData.value);
    const linha=document.createElement('div');
    linha.textContent='${inputGasto.value}; ${inputValor.value}; ${inputData.value}';
    inputExtrato.appendChild(linha)

}
*/

/*
//Exercicio 2

const inputGastos = document.getElementById('transacaoInputName');
const inputValor = document.getElementById('transacaoInputMoney');
const inputData = document.getElementById('transacaoInputDate');
const botao = document.querySelector('.button');
const extrato = document.querySelector('.extrato');

botao.addEventListener('click', criarTransacao);

function criarTransacao(event) {
  event.preventDefault();
  const linha = document.createElement('div');
  linha.textContent = `Seu gasto: ${inputGastos.value}, no valor ${inputValor.value}, realizado na data ${inputData.value} `;
  extrato.appendChild(linha);
}
*/

//-------

/*
exercicio2 com validação

const inputGastos = document.getElementById('transacaoInputName');
const inputValor = document.getElementById('transacaoInputMoney');
const inputData = document.getElementById('transacaoInputDate');
const botao = document.querySelector('.button');
const extrato = document.querySelector('.extrato');

botao.addEventListener('click', criarTransacao);

function criarTransacao(event) {
  event.preventDefault();
  const linha = document.createElement('div');

  if (
    inputGastos.value == '' &&
    inputValor.value == '' &&
    inputData.value == ''
  ) {
    linha.textContent = 'deu ruim';
    extrato.appendChild(linha);
  } else {
    linha.textContent = `Seu gasto: ${inputGastos.value}, no valor ${inputValor.value}, realizado na data ${inputData.value} `;
    extrato.appendChild(linha);
  }
}
*/




//meu

const inputGasto=document.getElementById('transacaoInputName');
const inputValor=document.getElementById('transacaoInputMoney');
const inputData=document.getElementById('transacaoInputDate');
const botao=document.querySelector('.button');
const extrato=document.querySelector('.extrato__table');

botao.addEventListener('click', criarTransacao);


function criarTransacao(event){
  event.preventDefault();
  const linha=document.createElement('div')
  linha.textContent='seu gasto em :'+inputGasto+'foi de '+inputValor+'no dia '+inputData
}