// Retorna true e false, da verificação

const frutas = ['abacaxi', 'banana', 'melancia']
const numeros = [1,2,3,4];
// const verificar = frutas.every((elementos)=>{
//     return elementos !== 'banana'
// })
// console.log(verificar);

const resultado = numeros.every((numeros)=>{
    return numeros < 5
})

console.log(resultado);