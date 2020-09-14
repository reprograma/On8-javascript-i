Tópicos da Aula:

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

---

## Manipulando o DOM

O DOM é a representação do objeto do documento HTML e atua como uma interface de programação que permite a manipulação de sua estrutura com o JavaScript ou outras linguagens.

Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos e modificar conteúdos.

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

### **Sintaxe**:

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

Métodos do DOM para manipular CSS

Adicionar e remover classes do HTML pelo Javascript

Eventos no Javascript
-Click
-Submit

Capturar valores de inputs em eventos

Validações com condicionais (if/else)
Regex https://regexr.com/

Objeto Date e seus métodos \*extra
