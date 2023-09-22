const dados = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 70, 90, 100, 91, 81, 71]

function aproveitamento(information){

    const primeiroIndice = Math.round(information.length * 10/100);
    const ultimoIndice = Math.round(information.length * 90/100);
    (primeiroIndice).toFixed();
    (ultimoIndice).toFixed();
    console.log(primeiroIndice, ultimoIndice);
    const novoDado = information.slice
    (primeiroIndice, ultimoIndice);
    console.log(novoDado);
}

aproveitamento(dados)