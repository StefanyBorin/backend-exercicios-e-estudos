const primeiraLetra =  "a";
const segundaLetra =  "v";
const palavras =  ["aveia","manha","ave"];

let palavrasCompativeis = 0;

    for( let palavra of palavras){
        if(palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
           palavrasCompativeis += palavra;
           console.log(palavra);
        }
    }
    if (palavrasCompativeis === 0) {
        console.log("NENHUMA");
    }

