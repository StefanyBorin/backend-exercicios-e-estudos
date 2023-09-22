function determindaFaixaEtaria(idade){
    if(idade <= 21){
        return "jovem";
    }else if (idade < 66) {
        return ("adulto");
    } else {
        return ("idoso");
    }
}

const retornoDaFuncao = determindaFaixaEtaria(70);

console.log(retornoDaFuncao);

