const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
// verificar qual o primeiro numero do array A
// verificar qual o primeiro numero do array B

//comparar para imprimir o menor



for (let i = 0; i < arrayA.length; i++) {

    if (arrayA[i] > arrayB[i]) {
        console.log(arrayB[i]);
    } else {
        console.log(arrayA[i]);
    }
}

