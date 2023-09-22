// Usado para adicionar text no inico da string ate que o tamanho seja atingido.

const ultimos4dig = "2345";

const cartao = ultimos4dig.padStart(19, "#### ");
console.log(cartao);