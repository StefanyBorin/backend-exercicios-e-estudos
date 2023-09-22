const express = require('express')

const{somar, subtrair, multiplicar, dividir } = require('./controladores/controles')

const rotas = express();

rotas.get('/somar', somar)

rotas.get('/subtrair', subtrair)

rotas.get('/dividir', dividir)

rotas.get('/multiplicar', multiplicar)

module.exports = rotas;