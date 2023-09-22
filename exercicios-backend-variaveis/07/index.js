// Po = a população incial de pessoas infectadas
// X = quantidade de pessoas para as quais um paciente infectado pode transmitir
// t = tempo percorrido


const po = 1000;
const x = 4;
const t = 7;

const totalPessoas = (po * Math.pow( x, t / 7)).toFixed(2);

console.log(`Apos ${t} dias tera um total de ${totalPessoas} pessoas infectadas`);

