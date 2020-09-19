Tópicos da Aula:

# Instruções:

Após clonar o repositório da aula, copie a pasta template, cole dentro da pasta entrega e renomeie com seu nome.
_ATENÇÃO_ Não modifique o conteúdo da pasta template original, apenas a que você copiou e renomeou.

### Façam suas perguntas através do DontPad

[http://dontpad.com/t8-on-js](http://dontpad.com/t8-on-js)

# Adicionando javascript no HTML

Para referenciar o arquivo JS a ser utilizado pelo HTML usaremos a tag `<script>`. O atributo `src` deve informar o caminho do seu arquivo JS.

```HTML
<script src="index.js"></script>
```

#### Onde utilizar

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Exemple</title>
</head>
<body>
   <!-- Sempre colocar a tag <script> antes do fechamento da tag body e ao final das demais tags. -->
   <script src="./index.js"></script>
</body>
</html>
```

---

## DOM - Document Object Model

### O que é DOM ?

DOM é uma sigla que significa **Document Object Model.** Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do **HTML.** A forma mais fácil de acessar e manipular o DOM é usando JavaScript.

![Capa do Slide](./assets/dom.jpg)

- **Document** - representa o documento HTML
- **Element** - são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
- **Text** - é o conteúdo de texto que vai entre os elementos (tags).
- **Attribut** - são os todos atributos para um nó específico. No caso, o attribute class="HERO" está associado ao elemento, outros exemplos de atributos são o href, o id, entre outros.

![Capa do Slide](./assets/dom2.jpg)

---

## Manipulando o DOM

O DOM é a representação do objeto do documento HTML e atua como uma interface de programação que permite a manipulação de sua estrutura com o JavaScript ou outras linguagens.

Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos, modificar conteúdos e adicionar diversos eventos.

![Capa do Slide](./assets/dom.gif)

---

## Métodos de manipulação - HTML/DOM

O DOM possui muitos métodos, são eles que fazem a ligação entre os nós (elementos) e os evento.
Seguem alguns dos principais métodos, para a lista completa acesse a [documentação.](https://developer.mozilla.org/en-US/docs/Web/API/Document)

### getElementById()

Esse método retorna o elemento que estiver contendo o nome do ID informado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

Exemplo:

#### HTML

```HTML
 <div>
   <input type="text" id="textInput" class="text-input"  />
</div>
```

#### Javascript

```js
let getInputId = document.getElementById('textInput');
```

### Demais metodos

### getElementsByClassName()

Retorna uma coleção de todos elementos que estiverem contendo o nome da classe informada.

### getElementsByTagName()

Uma coleção de todos elementos que contennham a tag name informada.

### querySelector()

Esse método retorna qualquer elemento do DOM, como classes, tags e ID's. Você precisa deixar explicito se está chamando uma classe, um ID ou uma tag.

Exemplo:

#### HTML

```HTML
<div>
 <input type="text" id="textInput" class="text-input" />
</div>
```

#### Javascript

```js
let getInputId = document.querySelector('#textInput');
let getInputClass = document.querySelector('.text-input');
let getInputTag = document.querySelector('input');
```

### Demais metodos

### querySelectorAll()

Semelhante ao querySelector(), só que retorna todos os elementos que se equiparam ao seletor.

### **Importante**:

Para selecionar apenas um elemento pelo `id`, é mais viável utlizar `document.getElementById` pois o mesmo é específico para essa finalidade. Caso precise de uma seleção mais avançada, use `document.querySelector` pelo fato de ter a liberdade de utilizar seletores CSS, o que é uma grande vantagem além de ser mais performático para o browser.

### **Sintaxe para seletores**:

```js
document.getElementById('nome-id');
//utilizar o nome do ID entre aspas

document.querySelector('.classe');
//utilizar o nome da classe entre aspas e acompanhada do ponto .

document.querySelector('#id');
//utilizar o nome do id entre aspas e utilizando a hashtag #

document.querySelector('div');
//utilizar o nome da tag entre aspas
```

#### **Mais métodos DOM**:

| Propriedade          | Descrição                                                                            |
| :------------------- | :----------------------------------------------------------------------------------- |
| documentElement      | Captura o elemento raiz <html> de um documento HTML.                                 |
| getElementById       | Busca um elemento da página Web com o uso do atributo id do elemento.                |
| querySelector        | Busca um elemento da página Web com o uso do atributo id, classe ou tag do elemento. |
| createElement        | Cria um nodo elemento na página.                                                     |
| createAttribute      | Cria um nodo atributo na página.                                                     |
| createTextNode       | Cria um nodo texto na página.                                                        |
| getElementsByTagName | Retorna um array dos elementos com o mesmo nome.                                     |
| appendChild          | Insere um novo elemento filho.                                                       |
| removeChild          | Remove um elemento filho.                                                            |
| parentNode           | Retorna o nodo pai de um nodo.                                                       |

---

## Eventos no Javascript

Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. Muitas das interações do usuário que está visitando sua página com o conteúdo do seu site podem ser consideradas eventos.

| Evento      | Descrição                                                    |
| :---------- | :----------------------------------------------------------- |
| onBlur      | remove o foco do elemento                                    |
| onChange    | muda o valor do elemento                                     |
| onClick     | o elemento é clicado pelo usuário                            |
| onFocus     | o elemento é focado                                          |
| onKeyPress  | o usuário pressiona uma tecla sobre o elemento               |
| onLoad      | carrega o elemento por completo                              |
| onMouseOver | define ação quando o usuário passa o mouse sobre o elemento  |
| onMouseOut  | define ação quando o usuário retira o mouse sobre o elemento |
| onSubmit    | define ação ao enviar um formulário                          |

Para chamar um evento externo iremos precisar de um manipulador de eventos, nesse caso vamos usar o event listener que adiciona ou remove um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

- **addEvent** - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.
- **removeEvent** - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.

---

## Funções

Uma função é um procedimento JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor,
ou seja, uma função é um bloco de código projetado para executar uma tarefa específica. Esse código é definido uma vez e chamado quantas vezes for necessário.

```javascript
function square(numero) {
  return numero * numero; // não pulamos linha entre return e o que vai ser retornado
}

console.log(square(4)); //16
console.log(square(5)); //25
alert(square(9)); //81
```

## Eventos no Javascript - Click

```javascript
elemento.addEventListener('click', function (evento) {
  //ação a ser executada no clique do elemento
  console.log(evento);
});
```

### preventDefault

O método `preventDefault()` cancela o evento se for cancelável, o que significa que a ação padrão que pertence ao evento não ocorrerá.

Por exemplo, isso pode ser útil quando:

- Clicando no botão "Enviar", evite que ele envie um formulário
- Ao clicar em um link, impeça o link de seguir o URL

Obs.: nem todos os eventos são canceláveis.

## Capturar valores de inputs em eventos

A propriedade value define ou retorna o valor do atributo value de um campo de texto.

A propriedade value contém o valor padrão OU o valor em que um usuário digita.

Retorne a propriedade value:

```javascript
input.value;
```

Defina a propriedade value:

```javascript
input.value = texto;
```

---

## Criar, inserir e excluir elementos da árvore DOM.

A função `document.createElement()` aceita como parâmetro o nome da tag e retorna o elemento recém criado (mas ainda não inserido).

```javascript
let novaTag = document.createElement('p');
```

Inserimos o elemento com a função `appendChild()`, mas ainda precisamos criar um conteúdo (nó de texto) para o elemento `<p>`, caso contrário, estaremos inserindo apenas o elemento, sem texto. Para criar um nó de texto utilizaremos a função `document.createTextNode()`.

```javascript
let texto = document.createTextNode('meu texto novo');
```

Antes de inserir o elemento, devemos atribuir o nó de texto a ele. Ou seja, referenciar corretamente o elemento pai ao elemento filho.

```javascript
novaTag.appendChild(texto);
```

O Novo elemento existe e tem conteúdo, porém ainda não foi inserido no html existente. Para isso utilizaremos a função `document.querySelector('.nome-da-classe')` e selecionaremos o nó onde o novo elemento que criamos será inserido.

```javascript
let minhaDiv = `document.querySelector('.classe-da-div')`;
```

Ou seja, agora com o elemento completo, podemos então, anexá-lo a um elemento <div> já existente em nossa página HTML. A função `appendChild()` insere o novo elemento filho ao final do elemento pai.

```javascript
minhaDiv.appendChild(novaTag);
```

É possível inserir um elemento através da função insertBefore(), ela aceita dois parâmetros: o primeiro é o elemento filho e o segundo é o elemento que servirá de referência para inserir o elemento filho.
Para remover um elemento utilizamos a função removeChild().

## Sintaxe Criar elementos

```javascript
document.createElement("nome-da-tag") para criar um elemento
document.createTextNode("algum texto") para criar um nó de texto
elementoPai.appendChild(elementoFilho) para inserir um elemento na última posição
elementoPai.insertBefore(elementoFilho, elementoAnterior) pra inserir um elemento em posição específica
elementoPai.removeChild(elementoFilho) para remover um elemento
```

---

## Métodos do DOM para manipular CSS

O DOM HTML permite que o JavaScript mude o estilo dos elementos HTML.

Para alterar o estilo de um elemento HTML, use esta sintaxe:

```javascript
elemento.style.property = novo estilo
```

---

## Adicionar e remover classes do HTML pelo Javascript

O Element.classList é uma propriedade somente leitura que retorna uma coleção com as classes do elemento.

```javascript
elemento.classList;
```

A propriedade classList é somente leitura, no entanto, você pode modificá-la usando os métodos add() e remove().

`contains()` Retorna um valor booleano, indicando se um elemento tem o nome da classe especificado. Valores possíveis:

- true - o elemento contém o nome da classe especificado
- false - o elemento não contém o nome da classe especificado

```javascript
elemento.classList.contains('classe');
```

`add()` Adiciona um ou mais nomes de classe a um elemento. Se a classe especificada já existir, a classe não será adicionada

```javascript
elemento.classList.add('classe');
```

`remove()` Remove um ou mais nomes de classe de um elemento. A remoção de uma classe que não existe, NÃO gera um erro

```javascript
elemento.classList.remove('classe');
```

---
