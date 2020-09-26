//adicionar um novo gasto nos inputs e ao clicar o botão adicionar as informações devem aparecer abaixo do campo relatório de gastos

// validar os três campos de input para que nenhum valor vazio possa ser adicionado

const inputGastos = document.getElementById('transacaoInputName');
const inputValor = document.getElementById('transacaoInputMoney');
const inputData = document.getElementById('transacaoInputdate');
const botao = document.querySelector('button');
const extrato = document.querySelector('extrato');

botao.addEventListener('click , criarTransação');

function criarTransacao(event) {
    event.preventDefault();
    console.log(inputGastos.nodeValue, inputValor.nodeValue, inputData.value)
    const linha = document.createElement('div');
    linha.textContent = '${inputGastos.value}; ${inputValor.value}; realizado na data ${inputData.value}';
    extrato.appendChild(linha)
    if(
        inputGastos.value == 0
        ) {
        
    }
}

