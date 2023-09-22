const palavra = "Malia";

let encontrado = false;// É falso pq ainda ira percorrer, e quando encontrado sera true.

for(let letra of palavra){
    if(letra === "h"){
        console.log("tem a letra H");
        encontrado = true
        break;

    }
}

if(!encontrado){
    console.log("não tem H");
}