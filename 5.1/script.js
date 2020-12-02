// Exercicio 01
function changeText() {
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[1].innerText = 'Descricao de como voce se ve daqui 2 anos.';
}
changeText();
// Exercicio 02
function changeSquareColorToGreen() {
    let square = document.getElementsByClassName('main-content');
    square[0].style.backgroundColor = 'rgb(76, 164,109)';
}
changeSquareColorToGreen()

// Exercicio 03
function changeSquareColorToWhite() {
    let square = document.getElementsByClassName('center-content');
    square[0].style.backgroundColor = 'white';
}
changeSquareColorToWhite();

// Exercicio 04
