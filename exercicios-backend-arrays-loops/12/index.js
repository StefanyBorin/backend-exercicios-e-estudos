const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];


//verificar a fila de dentro se seu tamanho é menor ou igual a 5




while (filaDeDentro.length < 5 ) {
    filaDeDentro.push(filaDeFora[0]);
    
    filaDeFora.shift();


}


console.log(filaDeDentro);
console.log(filaDeFora)