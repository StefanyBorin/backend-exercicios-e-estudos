const compra = [100, 100, 100]
function solucao (precos){
    if(precos.length >= 3){
        let menorValor = precos[0];
        let valorComDesconto = 0;
        let somaItens = 0;
        for (let item of precos) {
            if(item < menorValor){
                menorValor=item ;
            }
            somaItens+= item;
        }
        const desconto = (menorValor * (50/100));
        valorComDesconto = somaItens - desconto;
        console.log(valorComDesconto); 
    }else{
        let somaSemDesconto = 0;
        for (let item of precos) {
            somaSemDesconto+=item;
        }
        console.log(somaSemDesconto);
    }  
}
solucao(compra)