function inverterString(texto){
    //converte array em string
    const arrayLetras =texto.split("");
    //inverte o arrayLetras
    arrayLetras.reverse();
    console.log(arrayLetras);
    //juntar em uma string com join
    let stringInvertido = arrayLetras.join(" ")
    console.log(stringInvertido);
}

inverterString("Cubos Academy")