const original = [5, 7, 13, 17, 26, 34, 118, 245, 10, 20, 351];

let copiaDoArray = [];

for(let i = 0; i < original.length; i++){
    if(original[i] >= 10 && original[i] <= 20){
        copiaDoArray.push(original[i])
    }else if(original[i]> 100){
        copiaDoArray.push(original[i])
    }
}

console.log(copiaDoArray);
