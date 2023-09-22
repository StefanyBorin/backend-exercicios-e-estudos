const carros = [
    {nome:'punto', marca:'fiat', ano: 2015, cor:'prata'},
    {nome:'palio', marca:'fiat', ano: 2015, cor:'preto'},
    {nome:'idea', marca:'fiat', ano: 2018, cor:'branco'},
    {nome:'cronos', marca:'fiat', ano: 2022, cor:'azul'}
]
// argumentos modeloCarro sao o que é para ser filtrado
const modeloCarros = (marca, array)=>{
    //argumento carro sao os objetos a ser percorrido para retornar a marca caso encontre
    const resultado = array.find((carro)=>{
        console.log(carro);
        return carro.marca === marca
    });
    console.log(resultado);
}
modeloCarros("chevrolet",carros)