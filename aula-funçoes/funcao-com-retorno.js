//verificar se uma pessoa é maior de idade

function verificarMaiorIdade(idade){
    if(idade > 17){
        // é maior de idade
        return true
    }else{
        //não é maior de idade
        return false
    }
}

const valorRetornadoPelaFuncao = verificarMaiorIdade(18);

console.log(valorRetornadoPelaFuncao);