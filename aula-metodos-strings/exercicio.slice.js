// extrarir apenas os 2 ultimos do estado de uma cidade


const cidade = "Salvador - BA";


function estado(cidades) {
    const penultomoIndex = cidade.length;
    const estado = cidade.slice(penultomoIndex - 2);
//    const estado = cidade.slice(-2); ou podemos usar so assim tambem
    console.log(estado);
 }

estado(cidade)