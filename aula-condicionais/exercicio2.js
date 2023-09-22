const valorDaCompra = 100;
const numeroDeParcelas = 12;

if(numeroDeParcelas===1){
    const valorDesconto = (valorDaCompra - ((valorDaCompra/100)*10)).toFixed(2)

    console.log(`Valor a pagar àvista é R$ ${valorDesconto}`);
}
else if(numeroDeParcelas > 1 && numeroDeParcelas <= 6)
{
    const valorParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    
    console.log(`O valor parcelado fica ${numeroDeParcelas} parcelas de R$ ${valorParcela}.`);
}
else if(numeroDeParcelas >= 7 && numeroDeParcelas <= 12)
{
    const ValorComJuros = (valorDaCompra * Math.pow(1 + (1 / 100),numeroDeParcelas)).toFixed(2);

    const valorParcela = (ValorComJuros / numeroDeParcelas).toFixed(2)

    console.log(`Valor a pagar com juros é ${numeroDeParcelas} de R$ ${valorParcela} totalizando ${ValorComJuros}`);
}
else
{
    console.log("numero de parcelas invalido");
}