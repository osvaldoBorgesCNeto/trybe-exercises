const readline = require("readline-sync");

const calculoFatorial = () => {
  console.log("---------");
  const numeroEscolhido = readline.questionInt("Qual numero voce gostaria de fatorar? ");

  if (numeroEscolhido <= 0) {
    console.log("Escolha outro numero maior que 0!");
    calculoFatorial();
    return;
  }

  let result = 1;

  for (index = 1; index <= numeroEscolhido; index ++) {
    result *= index;
  };

  console.log("---------");
  console.log(`O fatorial de ${numeroEscolhido} é ${result}`);
};

calculoFatorial();

module.exports = (calculoFatorial);