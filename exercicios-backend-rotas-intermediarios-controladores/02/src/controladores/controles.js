const jogadores = require('../bancodedados')

let contador = 0;
let nomeformatado = '';
function verificarNomes(req, res, next) {
    const { nome } = req.query;
    const primeiraParte = nome.slice(0, 1);
    const letraMaiuscula = nome.slice(0, 1).toUpperCase();
    const restante = nome.slice(1)
    if (primeiraParte !== letraMaiuscula) {
        const format = primeiraParte.toUpperCase()
        nomeformatado = format + restante
        next()
    }
}

function obterJogadores(req, res) {
    res.send(`É a vez de ${jogadores[contador]} jogar!`)
    contador++
    if (contador >= jogadores.length) {
        contador = 0
    }
}

function removerJogadores(req, res) {
    const indice = req.query.indice
    Number(indice)
        jogadores.splice(indice, 1,)
        contador = jogadores
    
    if (indice > jogadores.length) {
        contador = 'Não existe jogador no índice informado para ser removido.'
    }
    if (indice === jogadores.length) {
        contador = jogadores.pop()
    }
    res.send(contador)
}

function adicionarJogadores(req, res) {
    const { indice } = req.query;
    if (nomeformatado && indice) {
        jogadores.splice(indice, 0, nomeformatado);
        contador = jogadores;
    }
    if (nomeformatado && indice === undefined) {
        jogadores.push(nomeformatado);
        contador = jogadores;
    }
    if (indice > jogadores.length) {
        contador = `O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`
    }
    res.send(contador)
}



module.exports = {
    obterJogadores,
    removerJogadores,
    adicionarJogadores,
    verificarNomes
}