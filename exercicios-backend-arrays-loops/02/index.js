const letras = ["A", "E", "B", "e", "E", "b"];

let total = 0;
// const temALetra = false;
//ira rodar se encontrar a letra especifica 
for(contador of letras){
    if(contador ==="E" || contador === "e"){
        
        total++
        
    }
}
if(total > 0){
    
    console.log(`Tem ${total} letas E ou e`);
}
else{

    console.log(`Nenhuma letra E ou e foi encontrada`);
    
}

