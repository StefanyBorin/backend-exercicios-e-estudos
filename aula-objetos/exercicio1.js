const user = {
    nome: "Andressa",
    idade: 35,
    altura: 1.95,
    temCNH: true,
    apelido: ["Bah", "Bicho"]
}

user.temCNH = (user.temCNH ? "possui CNH" : "não possui CNH")

console.log(`${user.nome} tem ${user.idade} anos, ${user.altura} m, ${user.temCNH} e os seguntes apelidos:`);

for( let apelido of user.apelido){
    console.log(`- ${apelido}`)
}

