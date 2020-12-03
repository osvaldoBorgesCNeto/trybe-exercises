function elementoOndeVoceEsta() {
    let elementoVoce = document.querySelector('#elementoOndeVoceEsta');
    return elementoVoce
}
elementoOndeVoceEsta();

// Exercicio 02
function elementoPai() {
    elementoOndeVoceEsta().parentNode.style.color = 'green';
}
elementoPai();

// Exercicio 03
function primeiroFilhoFilhoEscrever() {
    elementoOndeVoceEsta().firstElementChild.innerText = 'Ola Mundo';
}
primeiroFilhoFilhoEscrever();

// Exercicio 04
function primeiroFilhoPeloPai() {
    let elementoFilhoPeloPai = elementoOndeVoceEsta().parentNode.firstElementChild;
    return elementoFilhoPeloPai;
}
primeiroFilhoPeloPai();

// Exercicio 05
function primeiroFilho() {
    let elementoFilho = elementoOndeVoceEsta().previousElementSibling;
    return elementoFilho;
}
primeiroFilho();

// Exercicio 06
function proximoNo() {
    elementoOndeVoceEsta().nextSibling;
}
proximoNo();

// Exercicio 07
function terceiroFilho() {
    elementoOndeVoceEsta().nextElementSibling = 'Terceiro Filho';
}
terceiroFilho();

// Exercicio 08
function terceiroFilhoPeloPai() {
    elementoOndeVoceEsta().parentNode.childNodes[5];
}
terceiroFilhoPeloPai();