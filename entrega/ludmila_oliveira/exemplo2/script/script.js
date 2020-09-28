//adicionar um novo gasto nos inputs e ao clicar o botão adicionar as informações devem aparecer abaixo do campo relatório de gastos

// validar os três campos de input para que nenhum valor vazio possa ser adicionado

// CÓDIGO FEITO MAIS CERTINHO POSSÍVEL

const inputGastos = document.getElementById('transacaoInputName');
const inputValor = document.getElementById('transacaoInputMoney');
const inputData = document.getElementById('transacaoInputDate');
const botao = document.querySelector('.button');
const extrato = document.querySelector('.extrato');

botao.addEventListener('click', criarTransacao); // o JS entende a chamada da função mesmo ela sendo criada abaixo

function criarTransacao(event) {
    event.preventDefault();
    const linha = document.createElement('div');

    if(inputGastos.value == '' || inputValor.value == '' || inputData.value == '') {
        linha.textContent = ('Deu ruim');
        extrato.appendChild(linha);
    } else {
    
    linha.textContent = `O local do gasto foi: ${inputGastos.value} no valor de R$ ${inputValor.value} na data ${inputData.value}.`;
    extrato.appendChild(linha);

    }
}