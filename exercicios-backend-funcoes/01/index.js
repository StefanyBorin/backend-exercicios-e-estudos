const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "d",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "b",
            correta: "e"
        },
        {
            resposta: "c",
            correta: "d"
        }
    ]
};

function corrigirProva(correcao) {
    let valorCadaQuestao = prova.valor / prova.questoes.length;
    let acertos = 0;
    
    for (const item of prova.questoes) {
        if(item.correta === item.resposta){
            acertos++
        }
    }
    const pluralEscrita = acertos > 1 ? "questões" : "questão";
    let somaNota = valorCadaQuestao * acertos;
    
    console.log(`O aluno (a) ${prova.aluno} acertou ${acertos} ${pluralEscrita} e obteve a nota ${somaNota}`);
}

corrigirProva()

