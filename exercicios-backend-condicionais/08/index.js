const idade = 20;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;


if(idade < 12 || possuiPatologia || altura < 150){
    console.log("ACESSO NEGADO");
}
else{
    if(idade < 18 || ehEstudante){
        console.log(`paga 10 reais`);
    }
    else{
        console.log(`paga 20 reais`);
    }
}
