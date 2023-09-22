

// const formatando = numero.replace(",", ".")
// quando o numero for diferente da solução ele ira sair do loop

function formatandoNumeros(formatar, texto, novoTexto){

    while(formatar !==formatar.replace(texto, novoTexto)){
        formatar = formatar.replace(texto, novoTexto)
    }
    return formatar;
}

let numero = "1,350,000"

console.log(formatandoNumeros(numero, ",", "."));