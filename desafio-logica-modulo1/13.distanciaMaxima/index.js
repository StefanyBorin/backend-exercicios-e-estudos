function processData(input) {
    const linhas = input.trim().split("\n");
    const coordenadas = [];
    for(let i = 1; i<linhas.length; i++){
        const coordXY = linhas[i].split(" ")
        coordenadas.push({
            x: parseFloat(coordXY[0]),
            y: parseFloat(coordXY[1])
        })
    }
    let distanciaMaior = 0;
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = i+1; j < coordenadas.length; j++) {
            const subtracaoDeX = coordenadas[j].x - coordenadas[i].x;
            const subtracaoDeY = coordenadas[j].y - coordenadas[i].y;
            const distancia = Math.sqrt(Math.pow(subtracaoDeX,2) + Math.pow(subtracaoDeY))
            
            if (distancia > distanciaMaior) {
                distanciaMaior = distancia
            }
        }
        
    }
    console.log(distanciaMaior);
}