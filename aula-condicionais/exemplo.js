const temIngresso = true;
const censura = 16;
const idade = 15;

// verificar se tem igresso.
// verificar se o individuo tem acima de 16 anos.

if(temIngresso === true){
    if(idade >= censura ){
        console.log("pode assistir filme");

    }else{
        console.log("barada pela censura");
    }
}
else{
    console.log("barrada por falta de ingresso");
}