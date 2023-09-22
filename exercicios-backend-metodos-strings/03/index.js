let  texto = "Aprenda programar do zero na Cubos Academy";
function url(texto, espaco, caracter){

    while (texto !== texto.replace(espaco,caracter)) {
        
        texto = texto.replace(espaco,caracter);
    }
    return texto;
}


console.log(url(texto, " ", "-"));
