const  numeros= [0, 1, 2, 3, 4]

// Como somar todos os numeros de um array usando for
// let somaTotal = numeros[0];

// for (let i = 1; i < array.length; i++) {
//     const elementoAtual = numeros[i]
//     somaTotal =+ elementoAtual
// }

// console.log(somaTotal);

// somando todos os numeros de um array usando reduce
// não é necessario usar todos os argumentos
const somaComReduce = numeros.reduce((acumulador, elementoAtual)=>{
    return acumulador + elementoAtual
})

console.log(somaComReduce);

const somaComReduce2= numeros.reduce((acumulador, elementoAtual)=>{
    return acumulador + elementoAtual
}, 10)

console.log(somaComReduce2);


// podemos usar o debugger como se fosse o array com breackpoint

// Reduzindo varios arrays para 1 array
const arrays = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
]
const reduzindo = arrays.reduce((acumulador, elementoAtual, indice, array)=>{
// ele ira espalhar os elementos acumulador e elemento atual e unir ao acumulador que tem um array vazio
    return [...acumulador, ...elementoAtual]
},[]);

console.log(reduzindo);