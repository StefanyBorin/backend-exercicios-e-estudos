// Retorna o valor que a condição pede ou se nao encontrar retorna undefined

const usuarios = [
    {nome:'Joao', idade: 15},
    {nome:'paula', idade: 30},
    {nome:'lucas', idade: 20},
    {nome:'andre', idade: 80}
]
// funções que estao em uma variavel nao se coloca () apeans o nome da função
const resultado = usuarios.find((users)=>{
    return users.idade > 18
})

console.log(resultado);