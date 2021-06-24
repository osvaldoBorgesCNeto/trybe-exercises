const readline = require('readline-sync');

const calculoIMC = () => {
  console.log("---------");
  const peso = readline.questionFloat("Qual sua peso(kg)? ");
  const altura = readline.questionFloat("Qual seu altura(metro)? ");

  console.log("-----------")
  console.log(`Seu peso é ${peso}kg e sua altura é ${altura}m`);

  const calculo = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`IMC: ${calculo}`);

  if  (calculo < 18.5) {
    console.log("Situação: Abaixo do peso (magreza)");
    return;
  };

  if  (calculo => 18.5 && calculo <= 24.9 ) {
    console.log("Situação: Peso normal");
    return;
  };

  if  (calculo => 25 && calculo <= 29.9 ) {
    console.log("Situação: Acima do peso (sobrepeso)");
    return;
  };

  if  (calculo => 30 && calculo <= 34.9 ) {
    console.log("Situação: Obesidade grau I");
    return;
  };

  if  (calculo => 35 && calculo <= 40 ) {
    console.log("Situação: Obesidade grau II");
    return;
  };

  console.log("Situação: Obesidade grau III e IV");
};

calculoIMC();

module.exports = (calculoIMC);
