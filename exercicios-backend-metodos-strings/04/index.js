let identificador = "1312";
let nome = "José silva costa";
let email = "      jose@email.com  ";


//-------------  A  -------
const formatoIdentificador= identificador.padStart(6, 0)

console.log(`O identificador:${formatoIdentificador}`);

//---------- B ---------

const nomeCompleto = nome.split(" ");
let nomeFormatado = "";
 for (const item of nomeCompleto) {
    let primeiraLetra = item[0].slice(0,1);
    let restante = item.slice(1)
    nomeFormatado += primeiraLetra.toUpperCase() + restante+ " ";
 }

console.log(`Meu nome:${nomeFormatado.trim()}`);

 //----------- C ----------

 const emailSemEspacos = email.trim()

 console.log(`Meu Email:${emailSemEspacos}.`);