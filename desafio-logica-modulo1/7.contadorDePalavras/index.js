const palavras = " Cuidado, pois   usuarios as vezes deixam   espacos vazios no fim do texto      sem querer "

function solucao(texto){
    const textoLimpo = texto.trim();
    const arrayString = textoLimpo.split(" ");
    let qtdEspacos = 0;
    for (let espacos of arrayString) {
        if(espacos===""){
            qtdEspacos++
        }
    }
    const numeroDePalavas = arrayString.length - qtdEspacos;
    console.log(numeroDePalavas);
}
solucao(palavras)
