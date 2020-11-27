let fruits = [3, 4, 10, 1, 12];
let somaFrutas = null;

for (let index = 0; index < fruits.length; index += 1){
    somaFrutas += fruits[index];
}

if (somaFrutas > 15) {
    console.log(somaFrutas);
}else {
    console.log('Valor menor que 16');
}