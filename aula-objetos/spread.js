const pessoa = {
    //propriedades : valor,
    nome:"joao",
    idade:18,
    cidade:"São Paulo",
    carro
}

const endereco = {
    rua: "mar",
    numero: 54,
    bairro: "lagosta"
}

const novoObjeto = {
    ...pessoa,
    ...endereco
}
