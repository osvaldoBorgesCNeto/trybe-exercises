const fs = require('fs/promises');

fs.writeFile('./meu-arquivo.txt', 'Ola Mundo!!!')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Ola Mundo!');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()