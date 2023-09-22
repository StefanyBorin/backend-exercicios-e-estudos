const palpite = "a";
const palavra = "abelha";
let acerto = 0;
for ( let letras of palavra){
    if(letras === palpite){
        acerto++;
    }
}
console.log(acerto);
if(!acerto){
    console.log();
}