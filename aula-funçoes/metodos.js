const usuario = {
    nome:"joao",
    idade: 21,
    altura: 1.4,
    profissao:"estudante",
    apresentar: function(){
        const faixaEtaria = this.faixaEtaria(this.idade);
   
        console.log(`Sou ${this.nome} sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`);
    },
    faixaEtaria: function(){
        if(this.idade < 25){
            return "jovem"
        }else if(this.idade < 50){
            return "adulto"
        }else{
            return "idoso"
        }
    }
}

usuario.apresentar();
console.log(usuario.faixaEtaria());

