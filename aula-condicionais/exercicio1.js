const valorDaCompra = 201;
const numeroDeParcelas = 2;
// const desconto = valorDaCompra * 0.10
if(numeroDeParcelas === 1){
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;

    console.log(`Pagamento à vista ganhe desconto de 10% saindo no valor de ${valorAPagar} reais`);
}
else{
    const valorParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`O valor parcelado fica ${numeroDeParcelas} parcelas de R$ ${valorParcela}.`);
}