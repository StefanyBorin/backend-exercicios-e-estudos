const express = require('express');
const rotas = express();

const {listarInstrutores, obterInstrutor, cadastrarInstrutor, atualizarInstrutor, atualizarStatus, excluirInstrutor} = require('./controllers/constrols');

const {cadastrarAula, listarAulas, obterAulas, obterAulasInstrutor}=require('./controllers/aulas')

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);
rotas.post('/instrutores', cadastrarInstrutor);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.patch('/instrutores/:id/status', atualizarStatus);
rotas.delete('/instrutores/:id', excluirInstrutor);

rotas.post('/instrutores/:idInstrutor/aulas',cadastrarAula);
rotas.get('/aulas',listarAulas);
rotas.get('/aulas/:id',obterAulas);
rotas.get('/instrutores/:idInstrutor/aulas',obterAulasInstrutor);


module.exports = rotas;
