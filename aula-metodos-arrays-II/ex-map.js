const usuario = [
    {nome:"joao", sobrenome:"cardoso", idade:"29"},
    {nome:"pedro", sobrenome:"dourado", idade:"19"},
    {nome:"silvio", sobrenome:"ciqueira", idade:"9"}
]

const novoArray = usuario.map((users)=>{
    return {nomeCompleto: `${users.nome} ${users.sobrenome}`, idade: users.idade}
})

console.log(novoArray);