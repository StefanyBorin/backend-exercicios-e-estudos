//Metodo indexOf retorna em qual posição esta o elemento, em qual indice, se tiver em algum retona o numero, caso contrario retorna -1

// EX verificar se o Email é valido:
// Tem que ter um @
// E ter um ponto depois do @

const dadoEmail = "chi.ps@.elma";

function validandoEmail(email){
    const indexEmail = email.indexOf("@"); // armazena a posição de @
    console.log(indexEmail);

    if(email.includes("@")){
        
        if (email.includes(".", indexEmail)) {
            console.log("valido");
        }
        else{
            console.log("invalido");
        }
    }else{
       console.log("invalido");
    }
}

validandoEmail(dadoEmail);