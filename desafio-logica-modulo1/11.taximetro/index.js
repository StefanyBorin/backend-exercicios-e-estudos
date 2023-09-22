const min = 25;
const km = 11.5;
function solucao(min, km){
    const valorNormalPorMin = 50;
    const valorNormalPorKm = 70;  
    const kmNormal = 10;
    const minNormal = 20;  
    let somaTotal;
    if(min <= minNormal && km <= kmNormal){
        somaTotal = valorNormalPorKm * km + valorNormalPorMin * min;
    } else if (min <= minNormal && km > kmNormal) {
        const valorExtra = (km - kmNormal) * 50 + (kmNormal * valorNormalPorKm)
        somaTotal = valorExtra + (min * valorNormalPorMin);
    }else if(min > 20 && km <= 10) {
        const valorExtra = (min - minNormal) * 30 + (minNormal * valorNormalPorMin)
        somaTotal = valorExtra + (km * valorNormalPorKm);
    }    
    else if(min > 20 && km >10 ){
        const valorMinExtra = (min - 20) *30;
        const valorkmExtra = (km - 10) * 50;
        const kmNormalCobrada = 10 *70; 
        const minNormalCobrado = 20 * 50; 
        somaTotal = valorMinExtra + valorkmExtra + minNormalCobrado + kmNormalCobrada
    }
    console.log(Math.floor(somaTotal));
}
solucao(min, km);