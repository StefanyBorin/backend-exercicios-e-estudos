// const automatico = "false";

const carros = {
marca:"Fiat",
modelo:"Punto",
ano:2019,
cor:"prata",
quantidade_portas:4,
automatico:false
}

if(automatico === true){
    carros.automatico = "Sim"
}else{
    carros.automatico = "False"
}

console.log(carros);