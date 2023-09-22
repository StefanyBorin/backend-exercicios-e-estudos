const palavras = "CAPS"

function solucao(input) {
    let parte1 = "";
    let parte2 = "";
    let resultado = "";
    parte1 = input.slice(0, 1)
    parte2 = input.slice(1)
    if (parte1 === parte1.toLowerCase() && parte2 === parte2.toUpperCase()){
        resultado = parte1.toUpperCase() + parte2.toLowerCase()
    } else if (input === input.toUpperCase()) {
        resultado = input.toLowerCase()
    }
    else{
        resultado = input
    }
console.log(resultado);
}
solucao(palavras)