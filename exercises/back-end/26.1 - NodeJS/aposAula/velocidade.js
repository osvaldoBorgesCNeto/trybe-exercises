const readline = require("readline-sync");

const velocidadeMedia = () => {
  console.log("---------");
  const distancia = readline.questionInt("Qual distancia(metros)? ");
  const tempo = readline.questionInt("Qual tempo(segundos)? ");

  const calculo = (distancia / tempo).toFixed(2);

  console.log("---------");
  console.log(`Distancia é ${distancia}m e seu tempo é ${tempo}s`)
  console.log(`Velocidade média é ${calculo}m/s`)
}

velocidadeMedia();

module.exports = (velocidadeMedia);
