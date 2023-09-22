//desestruturação de objetos

const pessoa = {
    //propriedades : valor,
    nome:"joao",
    idade:18,
    cidade:"São Paulo",
    profissao: "Dev"
}

// acesso a varias propriedades

const {nome, idade, ...outros} = pessoa

console.log(nome, idade, outros);