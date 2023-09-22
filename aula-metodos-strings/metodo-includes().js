const pets = " Tenho quatro pets, bingo, nick, branca e paçoca"

// o metodo ira retornar um valor boolean: false ou true.

function encontrarPet(lista){
// pode se passar a partir de qual vc quer iniciar a busca atribuindo um valor de posição [0]
    if (lista.includes("paçoca"[40])) {
        console.log("tem");
    }else{
        console.log("nao tem");
    }
}

encontrarPet(pets)

console.log(pets.length);