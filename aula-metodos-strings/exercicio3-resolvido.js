
function imprimirData(dia, mes, ano){
    // Para aplicar o metodo precisa adicionar em uma variavel
    const formatoDia =  String(dia).padStart(2, 0)
    
    const formatoMes = String(mes).padStart(2, 0);
    
    console.log(`${formatoDia}/${formatoMes}/${ano}`);
}

imprimirData(18, 1, 2021)