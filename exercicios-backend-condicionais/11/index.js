//renda mensal do aluno, em centavos.
// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.

const rendaMensalEmCentavos = 350000;

const mesesDecorridos = 0;

const totalJaPagoPeloAluno = 0;

const valorDaParcela = rendaMensalEmCentavos / 100 * 18;


if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 1800000){

    console.log(`Aluno não tem valor a pagar, pois ja quitou a dívida`);
}
else if(rendaMensalEmCentavos < 200000){

    const valorDaParcela = 0
    console.log(`O valor da parcela desse mês é R$ ${valorDaParcela} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
}
else{
    console.log(`O valor a ser pago da parcela é de R$ ${(valorDaParcela / 100).toFixed(2)} reais`);
    
}



