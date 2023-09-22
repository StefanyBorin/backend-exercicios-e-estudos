//retorna um novo array com o proposto em teste dentro da função callback
// se nao encontrar retona array vazio
const numeros = [1,4,5,3,1,8];

const resultadoNumeros = numeros.filter((numero) =>{
    return numero % 2 === 0
})

console.log(resultadoNumeros);