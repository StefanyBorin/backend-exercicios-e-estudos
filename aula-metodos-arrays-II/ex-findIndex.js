//Retona o indice do primeiro elemento a ser procurado de acordo com a condição

const carros = [
    {nome:'punto', marca:'fiat', ano: 2015, cor:'prata'},
    {nome:'palio', marca:'fiat', ano: 2015, cor:'preto'},
    {nome:'idea', marca:'fiat', ano: 2018, cor:'branco'},
    {nome:'cronos', marca:'fiat', ano: 2022, cor:'azul'}
];

// retorna o indice 2
const resultado = carros.findIndex((lista)=>{
    return lista.marca==='ford'
})

console.log(resultado); // imprime 2