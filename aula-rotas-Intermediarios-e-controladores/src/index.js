const express = require('express');
const app = express();
//importação de funçoes
const {
    filtrarProf,
    encontrarProf
} = require('./constroladores/professores');

//Intermediarios
function primeiroIntermediario (requisicao, resposta, next){
    console.log('Passei no primeiroIntermediario')
    next();
}

function segundoIntermediario (requisicao, resposta, next){
    console.log('Passei no segundoIntermediario')
    next();
}

function intermediarioDeRota (requisicao, resposta, next){
    console.log('Passei no Intermediario de rota')
    next();
}
app.use(primeiroIntermediario);
app.use(segundoIntermediario);


// app.get('/',-> Vem depois do dominio, aqui é adicionado os recursos
// /busca, /home, /contato
// Parametros de URL (query)
//localhost:3000/professores
app.get('/professores',intermediarioDeRota,filtrarProf)

//localhost:3000/professores/2
// buscando o professor pelo ID (parametros de rotas)
app.get('/professores/:id',encontrarProf)

//porta que sera enviada a resposta
app.listen(3000);
