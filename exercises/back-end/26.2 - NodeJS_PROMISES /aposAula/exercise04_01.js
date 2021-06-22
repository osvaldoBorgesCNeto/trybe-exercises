const simpsons = require('./simpsons.json');

let arraySimpsons = simpsons.map((msg) => `${msg.id} - ${msg.name}`);

function simpsonsRead(array) {
  array.forEach((person) => console.log(person))
};

simpsonsRead(arraySimpsons);