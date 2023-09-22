// Usado para retirar espaços no inicio e no final da string

const email = "     jose@cubos.academy  "
console.log(`_${email}_`);

const retirandoEspacos = email.trim()

console.log(retirandoEspacos);