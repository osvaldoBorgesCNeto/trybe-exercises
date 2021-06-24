const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1

app.use(bodyParser.json()); // Body Parser

app.get('/hello', handleHelloWorldRequest); // 2

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (req, res) => {
  res.json(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.json(`Linguagem ${name} adicionada com sucesso.`);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).json('Hello World!'); // 4
}