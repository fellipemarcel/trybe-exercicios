const button = document.getElementById('add-button'); // COLOCANDO O BOTÃO EM UMA VARIÁVEL
const input = document.getElementById('phrases-input'); // COLOCANDO O INPUT EM UMA VARIÁVEL
const list = document.getElementById('phrases-list'); // COLOCANDO A 'UL' EM UMA VARIÁVEL

// CRIANDO UMA FUNÇÃO PARA INSERIR A FRASE NO DOM

const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); // VARIÁVEL BUSCANDO A CHAVE 'PHRASES'  NO LOCAL STORAGE E CONVERTENDO PARA O FORMATO ORIGINAL
  const listLength = phrasesList.length - 1;  // VARIÁVEL RECEBENDO O TAMANHO DA VARIÁVEL ACIMA E DIMINUINDO 1
  const phraseText = phrasesList[listLength]; // VARIÁVEL RECEBENDO A VARIÁVEL PHRASESLIST NA POSIÇÃO DA VARIÁVEL LISTLENGTH
  const phrase = document.createElement('li'); // VARIÁVEL CRIANDO UM NOVO ELEMENTO LI
  phrase.innerText = phraseText; // O INNERTEXT DA VARIÁVEL PHRASE RECEBENDO A VARIÁVEL PHRASETEXT
  list.appendChild(phrase); // CRIANDO A FILHA VARIÁVEL PHRASE
}

// CRIANDO UMA FUNÇÃO PARA INSERIR A FRASE NO LOCAL STORAGE
// ESSA FUNÇÃO PODERIA TER SIDO COLOCADA COMO PARÂMETRO DO ADDEVENTLISTENER DO BOTÃO

const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases')); // VARIÁVEL BUSCANDO A CHAVE 'PHRASES' NO LOCAL STORAGE E CONVERTENDO PARA O FORMATO ORIGINAL
  const phraseText = input.value; // VARIÁVEL RECEBENDO O VALOR DO INPUT
  oldList.push(phraseText); // COLOCANDO O VALOR DA VARIÁVEL PHRASETEXT DENTRO DA VARIÁVEL OLDLIST
  localStorage.setItem('phrases', JSON.stringify(oldList)); // COLOCANDO A CHAVE 'PHRASES' NO LOCAL STORAGE E O VALOR DA OLDLIST SENDO TRANSFORMADO EM STRING DO JSON
  insertPhraseInDOM(); // CHAMANDO A FUNÇÃO PARA INSERIR A FRASE NO DOM
}

// FUNÇÃO PARA FAZER O PROCEDIMENTO INICIAL

const initialRendering = () => {
  if (localStorage.getItem('phrases') === null) { // SE A CHAVE PHRASES NÃO EXISTIR NO LOCAL STORAGE
    localStorage.setItem('phrases', JSON.stringify([])); // CRIA A CHAVE PHRASES COM VALOR VAZIO TRANSFORMADO EM STRING JSON
  } else { // SE A CHAVE PHRASES NÃO FOR NULA, OU SEJA, JÁ EXISTIR
    const phrasesList = JSON.parse(localStorage.getItem('phrases')); // CRIA A VARIÁVEL PARA BUSCAR A CHAVE PHRASES NO LOCALSTORAGE E CONVERTE PARA O FORMATO ORIGINAL
    const listLength = phrasesList.length - 1; // CRIA A VARIÁVEL PARA RECEBER O TAMANHO DA PHRASESLIST DIMINUIDA DE 1
    for (let index = 0; index <= listLength; index += 1) { //CRIA LOOP PARA PERCORRER A VARIÁVEL LISTLENGTH, OU SEJA, PERCORRER A PHRASESLIST
      const listElement = document.createElement('li'); // A CADA ITERAÇÃO, VAI CRIAR UM NOVO ELEMENTO LI
      listElement.innerText = phrasesList[index]; // A CADA ITERAÇÃO, O INNERTEXT DO LI CRIADO RECEBE A PHRASESLIST NA POSIÇÃO DO INDEX
      list.appendChild(listElement); // A CADA ITERAÇÃO, CRIA A FILHA LI 'LISTELEMENT' E COLOCA NA UL (PAI)
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage); // COLOCANDO UM ESCUTADOR DE CLIQUE NO BOTÃO E CHAMANDO A FUNÇÃO PARA ADICIONAR A FRASE NO LOCAL STORAGE 

window.onload = () => initialRendering(); // FAZENDO O PROCEDIMENTO INICIAL RODAR NO CARREGAMENTO DA PÁGINA   