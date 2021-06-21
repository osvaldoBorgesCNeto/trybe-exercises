const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsonsFamily = simpsons.filter(simpson => ["1", "2", "3", "4"].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();
