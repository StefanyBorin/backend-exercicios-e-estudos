const precos = [20, 15, 8, 2, 12];

let menorDiferenca = 999999999999;
for(let i = 0; i < precos.length; i++){
    for (let p = i+1;  p< precos.length; p++) {
        const compra = precos[i];
        const venda = precos[p]
        const prejuizo = compra - venda;
        if(prejuizo > 0) {
            if(prejuizo < menorDiferenca){
                menorDiferenca = prejuizo
            }
        }
     }
    
}

console.log(menorDiferenca);

