const primeiroNome = "";
const sobrenome = "";
const apelido = "luk";

// imprimir o apelito de estiver preenchido
// ou o primeiro nome + sobrenome se estiver preenchido o sobrenome
// ou apenas o primeiro nome caso preenchido ou imprimir primeiro nome obrigatorio  

if(!primeiroNome){
    console.log(`Primeiro nome obrigatório`);

}else if(primeiroNome){
    if(!sobrenome && !apelido){
        console.log(primeiroNome)
    }
    else if(sobrenome && !apelido){

        console.log(primeiroNome + " "+ sobrenome);

    }else if(!sobrenome && apelido){
        console.log(apelido);
    }else{
        console.log(primeiroNome + " "+ sobrenome);
    }
}

