const entrada = 30;
const inferior = 5;
const superior = 30;

function solucao (numero, limiteInferior, limiteSuperior){
    if(numero >= limiteInferior && numero <= limiteSuperior){
        console.log("PERTENCE");
    }else{
        console.log("NAO PERTENCE");
    }
}

solucao(entrada, inferior, superior)