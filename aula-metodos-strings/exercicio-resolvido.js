const numeros = "97.50";
// podemos trasformar em string usando o metodo numero.string()
function formatacao(number){
    
    const formatado = number.replace(".", ",")

    console.log(formatado);

}

formatacao(numeros)

console.log(numeros);