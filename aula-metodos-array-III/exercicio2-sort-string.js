const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]
// aqui é determinado o parametro lista de carros para ser percorrido e junto por qual campo de ordem ira ser escolhida
const ordem = ((lista, campoOrdem)=>{
//aqui como forma dinamica pegaremos a lista que é um array de objetos e adicionamos sort que recebe 2 parametros primeiro item a ser comprada e segundo item, com o return 
    lista.sort((primeiro, segundo)=>{
        return primeiro[campoOrdem].localeCompare(segundo[campoOrdem])
    })
    console.log(lista);
})
ordem(carros, "ano")