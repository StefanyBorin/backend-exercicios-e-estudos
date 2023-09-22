const letra = "a";
const palavra =  [ "mamao", "maca", "melao", "melancia", "maranja", "abacaxi" ];

let perdedores = 0;
for ( itens of palavra ){
    if(itens[0] !== letra){
        perdedores++
    }
}

console.log(perdedores);