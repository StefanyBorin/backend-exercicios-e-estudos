const ladoA = 4;
const ladoB = 2;

//seu código aqui

if(ladoA === ladoB){
    if(ladoA === 0){
        console.log("Bucha de Branco");
    }
    else if (ladoA === 1) 
    {
        console.log("Bucha de Ás");
    }
    else if (ladoA === 2) 
    {
        console.log("Bucha de Duque");
    }
    else if (ladoA === 3) 
    {
        console.log("Bucha de Terno");
    }
    else if (ladoA === 4) 
    {
        console.log("Bucha de Quadra");
    }
    else if (ladoA === 5) 
    {
        console.log("Bucha de Quina");
    }
    else if (ladoA === 6) 
    {
        console.log("Bucha de Sena");
    }

}else{
    console.log("Não");
}