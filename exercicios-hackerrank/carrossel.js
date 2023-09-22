//percorrer o array e verificar o sentido do botao
//se o botao for >(direita) somo +1
//se o botao for <(esquerda) subitraio -1
//

const sequencia = [ ">", ">", ">", ">", ">", ">", ">", "<", "<", "<"];
let soma = 0;
for ( direcao of sequencia ) {
    if (direcao === ">") {
        soma ++
        if (soma > 6 ){
            soma = 0
        }
    }else{
        soma--
        if(soma < 0){
            soma = 6
        }
    }
}

console.log(soma);