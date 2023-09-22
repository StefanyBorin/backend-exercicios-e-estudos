const express = require('express');
const app = express();

const {arrayCarros,carrosIndividuais} = require('./controladores/controladores');

const {validarSenha} = require('./intermediarios');
app.use(validarSenha);  
app.get('/carros', arrayCarros)

app.get('/carros/:id',carrosIndividuais)

app.listen(3000)