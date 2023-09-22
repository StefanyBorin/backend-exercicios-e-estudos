const temIngresso = true;
const censura = 16;
const idade = 15;
const acompanhadoPais = false;

// tem que ter ingresso
//ser maior ou igual a idade de censura ou acompanhado dos pais
if(temIngresso){
    if(idade >= censura || acompanhadoPais){
        console.log("liberado");
    }else{

        console.log("Barrado");
    }
}else{
    console.log("barrado pelo ingresso");
}