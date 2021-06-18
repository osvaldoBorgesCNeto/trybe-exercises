const readline = require("readline-sync");

const calculoFibonacci = () => {
  console.log("---------");
  const numeroEscolhido = readline.questionInt("Qual numero voce gostaria de fazer Fibonacci? ");

  if (numeroEscolhido <= 0) {
    console.log("Escolha outro numero maior que 0!");
    calculoFibonacci();
    return;
  }

  let n1 = 1, n2 = 1, nextTerm;
  console.log("---------");
  console.log(`Fibonacci de ${numeroEscolhido}: `);

  for (index = 1; index <= numeroEscolhido; index ++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
};

calculoFibonacci();

module.exports = (calculoFibonacci);
