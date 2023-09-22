const carros = require('../bancodedados')

function arrayCarros(req, resp){
    const {marca, cor}=req.query
    let resultado = carros
    if(cor){
        resultado  = resultado.filter((carros)=>{
            return carros.cor === cor
        })
    }

    if(marca){
        resultado  = resultado.filter((carros)=>{
            return carros.marca === marca
        })
    }
    resp.send(resultado)
}

function carrosIndividuais(req, resp){
    const{ id } = req.params

    const carrosEncontrados = carros.find((carros)=>{
        return carros.id === Number(id);
    })
    resp.send(carrosEncontrados)
}

module.exports={
    arrayCarros,
    carrosIndividuais
}