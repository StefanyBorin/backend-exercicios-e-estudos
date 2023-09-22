const dadosPessoa = {
    nome: "Alex",
    idade:32,
    profissao:"Veterinaria",
    altura: 1.5
}

function apresentacao(dados) {
    console.log(`Olá! Meu nome é ${dadosPessoa.nome}, tenho ${dadosPessoa.idade} anos de idade, minha altura é ${dadosPessoa.altura} e sou ${dadosPessoa.profissao}`);
}

apresentacao(dadosPessoa)