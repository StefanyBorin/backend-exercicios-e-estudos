const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];


let soma = 0
const numeroJurados = notas.length -2;
let notaMaior = notas[0];
let notaMenor = notas[0];
for( numero of  notas ){
    
    soma += numero;
    if(numero >notaMaior ){
        notaMaior = numero;
    }
    if(numero < notaMenor){
        notaMenor = numero;
    }
}
let notasDescartadas = notaMaior + notaMenor;
const notasTotal = (soma - notasDescartadas )/ numeroJurados;
console.log(notasTotal);






