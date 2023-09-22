const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2000000; //emCentavos

//seu código aqui
// isento aposentados portadora de doença

if(aposentada ||portadoraDeDoenca){
    console.log("ISENTA");
}
else if(totalDeRendimentos <= 2855970){
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}
else{
    console.log("PEGA LEAO")
}

