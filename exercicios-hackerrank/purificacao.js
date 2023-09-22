const stringCorrompida = "*Canis %lupus )familiaris"
let letrasFiltradas = "";
for(let i = 0; i < stringCorrompida.length; i++) 
{
    if(stringCorrompida[i]!=="*" && 
    stringCorrompida[i] !== "!" &&
    stringCorrompida[i] !== "@" &&
    stringCorrompida[i] !== "#" &&
    stringCorrompida[i] !== "$"&&
    stringCorrompida[i] !== "%"&&
    stringCorrompida[i] !== "&"&&
    stringCorrompida[i] !== "*"&&
    stringCorrompida[i] !== "("&&
    stringCorrompida[i] !== ")")
    {
        letrasFiltradas+= stringCorrompida[i];
    }
}
console.log(letrasFiltradas);