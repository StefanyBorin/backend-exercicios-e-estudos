// percorrer o array compras e verificar se o tamanho é igual ou maior que que 5
// verificar qual dos item tem o menor valor 
// somar todos os item e diminuir o valor do menor item 

const precos = [35, 24, 66, 99, 30, 5, 2, 1]
let menorPreco = precos[0];
let soma = ;
if( precos.length >= 5){
    for(let produto of precos){
        soma +=produto;
        if(produto < menorPreco){
            menorPreco = produto;
        }
    }
    const valorTotal = soma - menorPreco;
    console.log(valorTotal);
}else{
    for(produto of precos){
        soma += produto;
    }
    valorTotal = soma
    console.log(valorTotal);
}
