const numeros = [54, 22, 14, 87, 0, 284, 10];

let encontrado = false
for(let i = 0;i < numeros.length;i++){
    if(numeros[i] === 10){
        encontrado = true
        console.log(i);
    }
}

if(!encontrado){
    console.log(-1);
}