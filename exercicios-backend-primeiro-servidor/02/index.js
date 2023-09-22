const express = require('express');
const app = express();
let min = 0;
let sec = 0;
let iniciar = false;
function contagem() {
    iniciar = true
    setInterval(() => {
        if (iniciar) {
            if (sec < 60) {
                sec++
            } else {
                min++
            }
        }
        if (min >= 60) {
            min = 0
            sec = 0
        }
    }, 1000)
}

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${min.toFixed()} minutos e ${sec.toFixed()} segundos.`)
})

app.get('/iniciar', (req, res) => {
    contagem()
    res.send(`Cronômetro iniciado!`)
})

app.get('/pausar', (req, res) => {
    iniciar = false
    res.send(`Cronômetro pausado!`)
})

app.get('/constinuar', (req, res) => {
    iniciar = true
    res.send(`Cronômetro continuando!`)
})

app.get('/zerar', (req, res) => {
    sec = 0
    min = 0
    res.send(`Cronômetro zerado!`)
})
app.listen(8000)
