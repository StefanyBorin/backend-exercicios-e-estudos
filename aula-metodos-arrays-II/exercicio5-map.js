const produtos = [
    {nome:"arroz", preco:500},{nome:"carne", preco:3200},{nome:"biscoito", preco:450},{nome:"arroz", preco:320}
]

const novoValor = produtos.map((produtos)=>{
    return {item:`${produtos.nome}`,
    valor: produtos.preco,
    desconto:`${produtos.preco * 0.10}`}
})

console.log(novoValor);