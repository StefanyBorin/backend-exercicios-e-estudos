// retorna true ou false se o menos 1 elemento corresponde a condição de teste


const nomes = ['joao', 'cris', 'luiz', 'robson'];
const numeros = [1, 1, 3, 1, 5]
// const resultado = nomes.some((nome)=>{
//     return nome === "cristian"
// })
// retornar se é par ou impar
const resultado = numeros.some((lista)=>{
    return lista % 2=== 0; 
})

console.log(resultado);