const palavra = "aritimeticaabecedario"

let letraA = 0;

for(let i = 0; i < palavra.length ; i++){
    if(palavra[i]=== "a" || palavra[i] === "A"){
        letraA++
    }
}   

if(letraA > 0){
    console.log(`Foram encontradas ${letraA} letras A ou a`)
}else{
    console.log(`Não foram encontrada nenhuma letra A ou a`);
}