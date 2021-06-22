const fs = require('fs').promises;


async function main() {
  const arrayString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const fileNames = arrayString.map((string, index) => string = `file${index + 1}.txt`);

  const writeString = arrayString.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
  
  await Promise.all(writeString);

  const readString = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));

  const allFiles = await Promise.all(readString);

  const newAllFiles = allFiles.join(' ');
    
  await fs.writeFile('./fileAll.txt', newAllFiles);
};

main();
