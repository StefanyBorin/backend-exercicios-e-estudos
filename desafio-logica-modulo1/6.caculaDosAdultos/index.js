const convidados = [16, 15, 12];

function solucao(lista){
    let idadeValida = Infinity;
    for (let item of lista) {
        if(item >=18 && item <= idadeValida){
            idadeValida=item;
        }
    }
    if(idadeValida === Infinity){
        idadeValida = "CRESCA E APARECA"
    }
    console.log(idadeValida);
}
solucao(convidados);