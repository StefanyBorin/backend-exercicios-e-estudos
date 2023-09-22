const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores){
    const filtrarJogadores0 = jogadores.filter((jogadores) => {
        return jogadores.jogada === 0
    });
    const filtrarJogadores1 = jogadores.filter((jogadores)=> {
        return jogadores.jogada ===1;
    })
    if (filtrarJogadores0.length === 1) {
        console.log(filtrarJogadores0[0].nome);
    } else if (filtrarJogadores1.length === 1) {
        console.log(filtrarJogadores1[0].nome);
    } else {
        console.log("NINGUEM");
    }
}
solucao(jogadores)
    
