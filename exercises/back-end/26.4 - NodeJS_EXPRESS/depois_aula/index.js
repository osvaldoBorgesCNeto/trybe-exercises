const express = require("express");
const bodyParser = require("body-parser");
const rescue = require("express-rescue");
const fs = require("fs/promises");

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ "message": "pong"});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ "message": `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if (age > 17) {
    return res.status(200).json({ "message": `Hello, ${name}` });
  };

  return res.status(401).json({ "message": "Unauthorized" });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.json({ "message": `Seu nome e ${name} e voce tem ${age} anos de idade` });
});

app.get('/simpsons',
  rescue(async (_req, res) => {
    const read = await fs.readFile('./simpsons.json', 'utf8').then(result => JSON.parse(result));
    res.status(200).json(read);
  })
);

app.get('/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const read = await fs.readFile('./simpsons.json', 'utf8').then(result => JSON.parse(result));

    const idSimpson = read.find((simpson) => simpson.id === id);

    if (!idSimpson) {
      return res.status(404).json({ "message": "simpson not found" });
    }

    res.status(200).json(read[id - 1]);
  }),
);

app.post('/simpsons',
  rescue (async (req, res) => {
  const { id, name } = req.body;
  const read = await fs.readFile('./simpsons.json', 'utf8').then(result => JSON.parse(result));

  const idSimpson = read.find((simpson) => simpson.id === id);

  if (idSimpson) {
    return res.status(409).json({ "message": "id already exists" });
  }

  read.push({ "id": `${id}`, "name": `${name}`});

  await fs.writeFile('./simpsons.json', JSON.stringify(read));

  res.status(204).end();
  }),
);

app.use((err, _req, res, _next) => {
  res.status(500).json(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log("Ligado"));