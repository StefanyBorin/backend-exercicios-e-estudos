//valor do produto comprado.
const valorDoProduto = 50000;

//quantidade de parcelas
const quantidadeDoParcelamento = 5;

//valor pago
const valorPago = 400;

const valorDeCadaParcela = (valorDoProduto / quantidadeDoParcelamento) / 100;

const restanteQueFalta = valorPago / valorDeCadaParcela; // 300 / 100 = 3

const parcelasQueFaltam = quantidadeDoParcelamento - restanteQueFalta; // 10 - 3

console.log(`Restam ${parcelasQueFaltam} parcelas de R$ ${valorDeCadaParcela}`);