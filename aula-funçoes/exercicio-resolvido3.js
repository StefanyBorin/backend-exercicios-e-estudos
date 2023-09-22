const usuario = {
    nome:"joao",
    idade: 70,
    altura: 1.4,
    profissao:"estudante"
}
apresentacaoUsers(usuario)

const pessoa3 = {
    nome:"Giovanna",
    idade: 30,
    profissao: "padeira"
}
apresentacaoUsers(pessoa3)

function verificarFaixaEtaria(anos){
    if(anos < 25){
        return "jovem"
    }else if(anos < 50){
        return "adulto"
    }else{
        return "idoso"
    }
}

function apresentacaoUsers(users){

    const faixaEtaria = verificarFaixaEtaria(users.idade)
   
    console.log(`Sou ${users.nome} sou um(a) ${faixaEtaria} de ${users.idade} anos e sou ${users.profissao}.`);
}