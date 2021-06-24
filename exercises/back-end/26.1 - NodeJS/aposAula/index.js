const readline = require("readline-sync");

const total = [
  { name: "IMC", script: "./imc.js" },
  { name: "Velocidade Média", script: "./velocidade.js" },
  { name: "Sorteio", script: "./sorteio.js" },
  { name: "Fatorial", script: "./fatorial.js"},
  { name: "Fibonacci", script: "./fibonacci.js"},
];

let msg = total.map((msg, index) => `${index} - ${msg.name}`);

msg.unshift("Qual script gostaria de escolher?");
msg.push("");

msg = msg.join("\n");

const qual = readline.questionInt(msg);

const script = total[qual];

if (!script) return console.log('Número inválido');

require(script.script);