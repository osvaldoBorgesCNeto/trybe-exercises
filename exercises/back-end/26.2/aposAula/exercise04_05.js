const simpsonsF = require('./simpsonsFamily.json');
const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsonsFamily = simpsonsF;
  simpsonsFamily.push({ id: `${(simpsonsFamily.length + 1)}`, name: simpsons.find((simpson) => simpson.id == 8).name});

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();

