const express = require('express')
const app = express()
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;
app.get('/jogadores',(requ, res)=> {
    const jogador = jogadores[contador]
    contador++
    if(contador >= jogadores.length){
        contador = 0;
    }
    res.send(`é a vez do jogador ${jogador}`)
})

app.listen(3000)
