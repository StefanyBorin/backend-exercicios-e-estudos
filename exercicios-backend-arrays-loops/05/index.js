const original = [1, 4, 12, 21, 53, 88, 112, 18, 13, 66, 99, 900];
let pares = [];

for(let i = 0; i<original.length; i++){
    if(original[i] % 2 === 0){
        pares.push(original[i]);
    }
}

console.log(pares);