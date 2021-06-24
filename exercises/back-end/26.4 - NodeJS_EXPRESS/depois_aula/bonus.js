const express = require("express");
const bodyParser = require("body-parser");
const rescue = require("express-rescue");
const crypto = require('crypto');

const app = express();

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
};

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ "message": "missing fields" });
  };

  const token = generateToken();

  return res.status(200).json({ "token": token });
});

app.use((req, res, next) => {
  const { authorization, token } = req.headers;

  if (!token || token.length != 5) {
    return res.status(401).json({ "message": "Token invalido!!!" });
  }
  return next();
})

app.get('/', (req, res) => {
  res.status(200).json("Deu certo!");
})

app.use((err, _req, res, _next) => {
  res.status(500).json(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log("Servidor Ligado!!!"));