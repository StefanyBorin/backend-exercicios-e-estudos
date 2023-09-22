const pessoa = {
    nome:"Jonas",
    idade: 20,
    profissao: "estagiario"
}

apresentacaoUsers(pessoa)

const pessoa2 = {
    nome:"Cris",
    idade: 65,
    profissao: "pedreiro"
}
apresentacaoUsers(pessoa2)

const pessoa3 = {
    nome:"Giovanna",
    idade: 40,
    profissao: "padeira"
}

apresentacaoUsers(pessoa3)

function apresentacaoUsers(users){
    if (users.idade< 25) {
        console.log(`Sou ${users.nome} sou um(a) jovem de ${users.idade} anos e sou ${users.profissao}`);
    }else if(users.idade < 65){
        console.log(`Sou ${users.nome} sou um(a) adulto (a) de ${users.idade} anos e sou ${users.profissao}`);
    }else{
        console.log(`Sou ${users.nome} sou um(a) idoso (a) de ${users.idade} anos e sou ${users.profissao}`);
    }
}
