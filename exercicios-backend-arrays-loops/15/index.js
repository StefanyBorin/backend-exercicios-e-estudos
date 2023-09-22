const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for(let numeros of original ){
//     if(numeros % 2 === 0 ){
//         pares.push(numeros);

//     }
//     else{
//         impares.push(numeros);
//     }
// }

console.log(pares);
console.log(impares);

for (let i = 0; i < original.length; i++) {

    if (original[i] % 2 === 0) {
        pares.push(original[i]);

    }
    else {
        impares.push(original[i]);
    }
}

console.log(pares);
console.log(impares);