const numeros = [7, 9, 20, 11]

// percorrer o array e verificar o menor e o maior numero

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let maior of numeros ){
    if(maior > maiorNumero){
        maiorNumero = maior
    }
}

for( menor of numeros){
    if(menor < menorNumero){
        menorNumero = menor;
    }
}

console.log(maiorNumero - menorNumero);
