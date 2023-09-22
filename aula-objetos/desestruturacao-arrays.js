const array = [1, 2, 3, 4, 5, 6]

// normalmente usamos assim

/*
const a = array[0];
const b = array[1];
*/

// porém para facilitar usamos

const [a, b, ...resto] = array; // o resto sempre no final

console.log(a, b, resto);

