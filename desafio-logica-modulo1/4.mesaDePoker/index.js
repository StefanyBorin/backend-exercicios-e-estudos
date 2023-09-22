const aposta = [1, 5, 6, 10, 11];
const valorMaximo = 1;
const valorMinimo = 1;

function solucao(min, max, valores) {
    let autorizada = [];
    for (let item of valores) {
        if (item >= min && item <= max){

            autorizada.push(item)
        }
    }
    console.log(autorizada);
}

solucao(valorMinimo, valorMaximo, aposta);