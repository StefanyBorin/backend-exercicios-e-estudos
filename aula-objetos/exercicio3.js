const bebidas = {
    nome:"Coca-cola",
    precoUnitario: 3500,
    quantidade: 3
}

const porcao = {
    nome: "Calabresa",
    precoUnitario: 5400,
    quantidade: 6
}

const chopp = {
    nome: "Thor Belgian IPA",
    precoUnitario: 7400,
    quantidade: 8
}
const produtosConsumidos = [bebidas, porcao, chopp];



const cartaoDeConsumo = {
    nome: "Cleber",
    idade: 33,
    produtosConsumidos
};


console.log(`${cartaoDeConsumo.nome}, tem ${cartaoDeConsumo.idade} anos.`);

cartaoDeConsumo.idade = 24

console.log(`idade é ${cartaoDeConsumo.idade}`);

console.log(cartaoDeConsumo.produtosConsumidos[0].nome);

console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length -1].precoUnitario);
