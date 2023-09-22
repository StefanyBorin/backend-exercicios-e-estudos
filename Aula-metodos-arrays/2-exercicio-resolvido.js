function inverterString(texto){
    //converte array em string
    const arrayLetras =texto.split("");
    //inverte o arrayLetras
    arrayLetras.reverse();
    console.log(arrayLetras);
    //
    let stringInvertido = "";
    for (let item of arrayLetras) {
        stringInvertido += item
    }
    console.log(stringInvertido);
}

inverterString("Cubos Academy")