const nomes = ['text.bat', 'julia.png', 'exel.bat', 'bia.doc'];

const verificadorDeVirus = (arrayArquivos)=>{
    //subistitui o loop de percorrer arrays 
    const retorno = arrayArquivos.some((arquivo)=>{
        const temVirus = arquivo.indexOf('.bat'); 
        return temVirus !== -1;
    })
    if (retorno) {
        console.log('virus detectado');
    }else{
        console.log('nenhum virus detectado');
    }
}
verificadorDeVirus(nomes)