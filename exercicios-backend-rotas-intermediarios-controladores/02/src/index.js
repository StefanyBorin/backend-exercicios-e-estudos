const express = require('express');
const app = express();
const {obterJogadores, removerJogadores, adicionarJogadores, verificarNomes} = require('./controladores/controles')

// app.use(verificarNomes)


app.get('/',obterJogadores)

app.get('/remover',removerJogadores)

app.get('/adicionar',verificarNomes,adicionarJogadores)

app.listen(8000)