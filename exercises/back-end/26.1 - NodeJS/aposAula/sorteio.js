const readline = require("readline-sync");

const sorteio = () => {
  console.log("---------");
  const numeroEscolhido = readline.questionInt("Escolha um numero inteiro entre 0 e 10: ")

  const numeroSorteado = Math.round(Math.random() * (10 - 0) + 0);

  if (numeroSorteado === numeroEscolhido) {
    console.log("Parabéns, número correto!")
  };

  if (numeroSorteado != numeroEscolhido) {
    console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}`);
  };

  const resposta = readline.question("Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ")

  if (resposta === "s") {
    sorteio();
  };
};

sorteio();

module.exports = (sorteio);
