const simpsons = require('./simpsons.json');

function filterSimpson() {
  return new Promise((resolve, reject) => {
    const filterSimpsons = simpsons.filter((simpson) => simpson.id != 6 && simpson.id != 10)

    resolve(filterSimpsons);
  });
}

filterSimpson()
  .then(result => console.log(result))
  .catch(err => console.log(`Error: ${err.message}`));