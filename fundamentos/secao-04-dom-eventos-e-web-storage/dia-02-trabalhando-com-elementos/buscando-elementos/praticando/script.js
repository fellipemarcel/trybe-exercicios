const elemento = document.getElementById('elementoOndeVoceEsta');

const paielemento = document.getElementById('elementoOndeVoceEsta').parentElement;
paielemento.style.color = 'red';

const primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Texto adicionado ao PrimeiroFilhoDoFilho';

const primeiroFilho = document.getElementById('pai').firstElementChild;

const primeiroFilhoOndeVcEsta = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

const atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;

const terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

const terceiroFilhoPai = document.getElementById('pai').lastElementChild.previousElementSibling;