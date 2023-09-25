const express = require('express');
const rotas = express();

const {listarInstrutores, obterInstrutor, cadastrarInstrutor, atualizarInstrutor, atualizarStatus, excluirInstrutor} = require('./controllers/controls');

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);

//rota post cadastrar instrutores
rotas.post('/instrutores', cadastrarInstrutor);

//rota put cadastrar iatualizar todo o cadastro
rotas.put('/instrutores/:id', atualizarInstrutor);

//rota patch atualizar apenas status
rotas.patch('/instrutores/:id/status', atualizarStatus);

//rota delete deletar instrutor
rotas.delete('/instrutores/:id', excluirInstrutor);

module.exports = rotas;