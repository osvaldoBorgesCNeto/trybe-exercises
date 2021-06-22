const simpsons = require('./simpsons.json');

function infoSimpson(id) {
  return new Promise((resolve, reject) => {
    if (!simpsons.map((simpson) => simpson.id).includes(`${id}`)) return reject(new Error("id não encontrado"));

    resolve(simpsons[id].name);
  });
}

infoSimpson(1)
  .then(result => console.log(result))
  .catch(err => console.log(`Error: ${err.message}`));