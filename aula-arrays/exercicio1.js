const nomesPaises = ["EUA", "Canadá", "França", "México", "Japão"];
console.log(nomesPaises);

//adicionando ao final da lista
nomesPaises.push("Uruguai");

console.log(nomesPaises);

//removendo o ultimo item
nomesPaises.pop();

console.log(nomesPaises);

//adicionando ao inicio da lista
nomesPaises.unshift("Cazaquistão");

console.log(nomesPaises);

//removendo o primeiro item da lista
nomesPaises.shift();

console.log(nomesPaises);

//imprimindo o ultimo item
const ultimoItem = nomesPaises[nomesPaises.length-1];
console.log(ultimoItem);
console.log(nomesPaises.pop());

//imprimindo o segundo item da lista
const segundoItem = nomesPaises[1];

console.log(segundoItem);

//imprimindo o indice 2 da lista
const segundoIndice= nomesPaises[2];
console.log(segundoIndice);
