const jogadas = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

function solucao(numero){
    let soma = 0
    for (const item of numero) {
        soma += item;
    }
   const restoDivisao = soma % numero.length
   if(restoDivisao === 0){
    console.log(numero.length);
   }else{
    console.log(restoDivisao);
   }
}

solucao(jogadas)