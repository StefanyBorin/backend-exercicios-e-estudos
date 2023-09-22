const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let novoArray = [];


for ( novosNomes of nomes){
    const letraA = novosNomes[0];
    if (letraA === "a" || letraA === "A") {
        novoArray.push(novosNomes)
    }
}

console.log(novoArray);