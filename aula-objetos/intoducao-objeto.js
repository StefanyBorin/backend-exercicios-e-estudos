const pessoa = {
    //propriedades : valor,
    nome:"joao",
    idade:18,
    cidade:"São Paulo"
}

pessoa.nome = "Paulo";
pessoa["cidade"] = "Arapongas";

console.log(`Meu nome é ${pessoa.nome} moro em ${pessoa.cidade}`);

