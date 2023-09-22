const resultados = ["V", "E", "V", "E"];

let pontos = 0;

for (let i = 0; i < resultados.length; i++){
    if(resultados[i] === "V"){
        pontos += 3;
    }else if(resultados[i] === "E"){
        pontos += 1;
    }else{
        pontos += 0;
    }
}

console.log(pontos);