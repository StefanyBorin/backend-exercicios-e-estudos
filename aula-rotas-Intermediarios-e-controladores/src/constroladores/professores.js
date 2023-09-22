const professores = require('../bancodedados');

//Filtro de professores
function filtrarProf (requisicao, resposta){
    const{stack} = requisicao.query;
    let resultado = professores;

    console.log('cheguei no controlador Filtarprof');

    if (stack) {
        resultado = professores.filter((professor)=>{
            return professor.stack === stack
        });
    };
    resposta.send(resultado)
}

//eEncontrar professor
function encontrarProf(requisicao, resposta){
    const professorEncontrado = professores.find((professor)=>{
        return professor.id === Number(requisicao.params.id)
    });
    resposta.send(professorEncontrado);
}

module.exports = {
    filtrarProf,
    encontrarProf
}