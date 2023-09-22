
const produtosConsumidos = [
    {
    nome:"Coca-cola",
    precoUnitario: 3500,
    quantidade: 3
}, 
{
    nome: "Calabresa",
    precoUnitario: 5400,
    quantidade: 6
}, 
{
    nome: "Thor Belgian IPA",
    precoUnitario: 7400,
    quantidade: 8
}];

const cartao = {
    nome: "Cleber",
    idade: 33,
    produtosConsumidos
};

let comanda = 0 ; 
for ( let produto of cartao.produtosConsumidos ){
    comanda += produto.precoUnitario * produto.quantidade;
}
const valortotal = (comanda / 100).toFixed(2);
console.log(`${cartao.nome}, o valor da sua comanda é de R$ ${valortotal}`);