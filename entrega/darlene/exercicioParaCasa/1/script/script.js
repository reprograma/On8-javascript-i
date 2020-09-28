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

const nota1 = document.querySelector('.nota1');
const nota2 = document.querySelector('.nota2');
const botao = document.getElementById('button');

// Função para validar a entrada com duas casa décimais ------------------------------------------------------------------

function tratarNumero(elemento) {

    let valor = elemento.value;

    if (valor.length >= 5) {
        // Aqui o valor que entrar vai ter letras substituidas por espaço em branco e 2 casas decimais antes e depois do ponto no máximo 
        elemento.value = valor.replace(/\D/g, "").replace(/([0-9]{2})([0-9]{2})/, "$1.$2");
        // E caso seja maior que 10, vai ser forçado a ser no máximo 10 a pontuação
        if (valor > 10.00) {
            elemento.value = 10.00
        }
    } else {
        // Aqui o valor que entrar vai ter letras substituidas por espaço em branco e 1 casa decimal antes e depois do ponto inicialmente 
        elemento.value = valor.replace(/\D/g, "").replace(/([0-9]{1})([0-9]{1})/, "$1.$2");
    }

    return elemento.value
}

// Função para fazer o cálculo da média ----------------------------------------------------


botao.addEventListener('click', calcularMedia);

function calcularMedia(event) {
    event.preventDefault();

    const valorNota1 = parseFloat(nota1.value);
    const valorNota2 = parseFloat(nota2.value);

    const valorMedia = ((valorNota1 + valorNota2) / 2);
    const porcentagemMedia = valorMedia * 10;

    const useMensagem = document.querySelector('.media');

    if (porcentagemMedia >= 70) {

        //Assim a mensagem aparece apenas uma vez.
        useMensagem.textContent = `Parabéns! Você foi aprovado com a média ${ porcentagemMedia}%`

        useMensagem.classList.add('aprovacao');
        useMensagem.classList.remove('reprovacao');
        useMensagem.classList.remove('mensagem-de-erro');

    } else if (porcentagemMedia < 70) {

        useMensagem.textContent = `Infelizmente, você não atingiu a nota mínima para aprovação. Sua média é ${porcentagemMedia}%`

        useMensagem.classList.add('reprovacao');
        useMensagem.classList.remove('aprovacao');
        useMensagem.classList.remove('mensagem-de-erro'); //Sempre lembrar de remover o estilo adicionado quando a situação muda!

    } else if (isNaN(nota1) || isNaN(nota2)) {
        useMensagem.textContent = `Preencha os campos com valores numéricos.`

        useMensagem.classList.add('mensagem-de-erro');
        useMensagem.classList.remove('aprovacao');
        useMensagem.classList.remove('reprovacao');
    }

    nota1.value = '';
    nota2.value = '';

}