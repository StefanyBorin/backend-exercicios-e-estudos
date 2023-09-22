//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 4;

if(quantidadeDeAguaIngerida < 1.5){

    const qualtidadeIdeal = 3;
    const objetivo = qualtidadeIdeal - quantidadeDeAguaIngerida;
    console.log(`Risco Alto - Você está ingerindo pouquissima água, falta ${objetivo} litros para atingir o objetivo, beba mais água!`);
}
else if(quantidadeDeAguaIngerida < 3){

    const qualtidadeIdeal = 3;
    const objetivo = qualtidadeIdeal - quantidadeDeAguaIngerida;
    console.log(`Risco Moderado - Você está ingerindo pouca água, ainda falta ${objetivo} litros, beba mais!`);
}
else{

    console.log(`Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!`);
}