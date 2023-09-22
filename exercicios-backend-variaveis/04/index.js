const capital = 1000;
const i = 12.5 / 100;
const tempoInvestimento = 5

let montante = capital * Math.pow((1+ i), tempoInvestimento)

console.log(`O montante arrecadado por ${tempoInvestimento} meses é de ${montante}`);