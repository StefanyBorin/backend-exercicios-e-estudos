const express = require('express');
const rotas = express()

const {listarInstrutores} = require('./controllers/controls')

rotas.get('/instrutores', listarInstrutores);

module.exports = rotas;