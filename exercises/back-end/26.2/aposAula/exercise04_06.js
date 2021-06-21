const simpsonsF = require('./simpsonsFamily.json');
const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsonsFamily = simpsonsF;
  simpsonsFamily.map((simpson) => simpson.id == 5 ? simpson.name = simpsons.find((simpson) => simpson.id == 5).name : simpson.name);
  console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();
