//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 300.00;

if (tipoDePagamento === "credito"){

    const desconto = ((valorDoProduto / 100) * 5).toFixed(2);
    const valorComDesconto = (valorDoProduto - desconto).toFixed(2);

    console.log(`O valor a ser pago na modalidade ${tipoDePagamento} sai de ${valorDoProduto} por R$ ${valorComDesconto} reais com desconto de R$ ${desconto} reais`);

}
else if(tipoDePagamento === "cheque"){

    const desconto = ((valorDoProduto / 100) * 3).toFixed(2);
    const valorComDesconto = (valorDoProduto - desconto).toFixed(2);

    console.log(`O valor a ser pago na modalidade ${tipoDePagamento} sai de R$ ${valorDoProduto} por R$ ${valorComDesconto} reais com desconto de R$ ${desconto} reais`);
}else{
    const desconto = ((valorDoProduto / 100) * 10).toFixed(2);
    const valorComDesconto = (valorDoProduto - desconto).toFixed(2);

    console.log(`O valor a ser pago na modalidade ${tipoDePagamento} sai de R$ ${valorDoProduto} por R$ ${valorComDesconto} reais com desconto de R$ ${desconto} reais`);
}