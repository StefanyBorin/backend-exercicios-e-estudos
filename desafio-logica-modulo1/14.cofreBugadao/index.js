function processData(input) {
    const senhaCorreta = input[0];
    const senhaErrada = input[1];
    let index = 0;
    let autorizacao = "";
    for (let i = 0; i < senhaErrada.length; i++) {
        if (senhaErrada[i] === senhaCorreta[index]) {
            index++;
        }
        if (index === senhaCorreta.length) {
            autorizacao = "SIM";
        }

    }
    if (index !== senhaCorreta.length) {
        autorizacao = "NAO";
    }
    console.log(autorizacao)
} 
const senhaCofre = ['cubos', 'cuggbyos']
processData(senhaCofre)