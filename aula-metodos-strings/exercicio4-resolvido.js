// trasforme stefany celeste borin
// Em Stefany Celeste Borin

const nome = "stefany celeste borin";

const nomeCompleto = nome.split(" ");

//console.log(nomeCompleto);

const primeiroNome = nomeCompleto[0]
const segundoNome = nomeCompleto[1]
const terceiroNome = nomeCompleto[2]



//console.log(letra1);

function primeiraLetra(nome) {
    let nomeFormatado = "";
    for (let i = 0; i < nome.length; i++) {

        let primeiraLetra = nome[i].slice(0, 1)

        let restante = nome[i].slice(1)

        nomeFormatado += primeiraLetra.toUpperCase() + restante+ " ";
    }
    console.log(nomeFormatado.trim());
}

primeiraLetra(nomeCompleto)