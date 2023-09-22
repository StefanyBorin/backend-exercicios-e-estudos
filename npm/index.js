// importando pacote para dentro do arquivo, para ser usado os metodos
const {uniq} = require('lodash');

//importar arquivos
const array = require('./array');

//desetruturar objeto importado
const{arrayLetras, arrayNumeros} = require('./array');

//console.log(array);
console.log(array.arrayNumeros);
console.log(arrayLetras);

// // numeros unicos dentro do array, metodo uniq
const arrayNumerosUnico = uniq(arrayNumeros)
const arrayLetrasUnico = uniq(array.arrayLetras)

console.log(arrayLetrasUnico);
console.log(arrayNumerosUnico);