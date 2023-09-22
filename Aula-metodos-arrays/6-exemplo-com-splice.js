let array = ["a", "b", "c", "d", "e"] 
// primeiro argumento é o indice que ira começar a modificação.
//segundo argumento é quantos eu itens eu quero remover com a partir do index.
// e o que eu quero por no lugar.
array.splice(1, 2, "f")
//console.log(array);

//------------#-----------
array = ["a", "b", "c", "d", "e"] 
array.splice(1, 2, "f", "g", "h" )
//console.log(array); // a f g h d e

array = ["a", "b", "c", "d", "e"] 
array.splice(1, 0, "f", "g", "h" )
//console.log(array); // a f b c d e

//push
array = [1, 2, 3, 4, 5, 6]
array.splice(array.length, 0, 2.5, 2.8)
console.log(array);

//pop
array = [1, 2, 3, 4, 5, 6];
array.splice(array.length-1, 1)
console.log(array);

//shift
array = [1, 2, 3, 4, 5, 6];
array.splice(0, 1)
console.log(array);

//unshift
array = [1, 2, 3, 4, 5, 6];
array.splice(0, 0, 6.9);
console.log(array);