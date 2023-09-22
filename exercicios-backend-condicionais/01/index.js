const jogada1 = "papel"
const jogada2 = "papel"

//seu código aqui

//Pedra ganha se for com tesoura
//Tesoura ganha se for com papel
//Papel ganha se for com pedra
//
if(jogada1==="pedra" && jogada2==="tesoura" ||jogada1==="tesoura" && jogada2==="pedra"){
    console.log(`pedra`);
}
else if(jogada1==="tesoura" && jogada2 === "papel" || jogada1==="papel" && jogada2 === "tesoura"){
    console.log(`tesoura`)
}
else if(jogada1 === "papel" && jogada2 === "pedra" ||jogada1 === "pedra" && jogada2 === "papel" ){
}
else if(jogada1 == jogada2 || jogada2 == jogada1){
    console.log(`empate`);
}