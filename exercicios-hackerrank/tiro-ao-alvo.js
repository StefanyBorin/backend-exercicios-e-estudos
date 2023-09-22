//proxima fase minimo 3 tiros acima de 70
const disparos = [0, 50, 20, 10, 10, 50, 40]
let pontos = 0;
for (let i = 0; i < disparos.length; i++){
    if(disparos[i] >= 70){
        pontos++
    }
}
if(pontos >= 3){
    console.log(pontos);
}else{
    console.log("ELIMINADO");
}