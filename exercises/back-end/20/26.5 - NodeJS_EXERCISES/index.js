const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.get('/btc/price', middlewares.validatorToken, middlewares.coinDesk);

app.listen(3000, () => console.log("Servidor Ligado!"));