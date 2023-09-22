//retona os numeros ordenados de acordo com a tabela unicode
const array = [10,2,2,1,3,34,6,75,21,3*2, 10/100]

//array.sort()
console.log(array); // imprime 0.21, 10, 2, 34, 6, 75


//---------------callback ordenação numerica crescente 

const ordenando = array.sort((primeiroElemento, segundoElemento)=>{
    if (primeiroElemento < segundoElemento) {
        return -1;// return negativo faz o primeiro elemento ser antes do segundo elemento
    }
    if (primeiroElemento > segundoElemento) {
        return 1; // return positivo faz o segundo elemento vir antes do primeiro elemento
    }
    return 0; //siginifia que os dois elementos sao iguais
})
// mesmo que:
array.sort((primeiroElemento, segundoElemento)=>{
    return primeiroElemento - segundoElemento // se a subtração retornar numero negativo, significa que a é antes de b;
    // se retornar positivo o segundo elemento vira antes
})
console.log(array);

//--------callback decrescente-----
array.sort((a,b)=>{
    if (a < b) {
        return 1; // return positivo faz o segundo elemento vir antes do primeiro elemento
    }
    if (a > b) {
        return -1;// return negativo faz o primeiro elemento ser antes do segundo elemento
    }
    return 0; //siginifia que os dois elementos sao iguais
})
// mesmo que :
array.sort((a,b)=>{
   return b - a 
})

console.log(array);