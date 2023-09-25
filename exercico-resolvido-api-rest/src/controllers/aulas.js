let { identificadorAula, instrutores, aulas } = require('../bancodedados')

function cadastrarAula(req, res) {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const encontrarInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })
    if (!encontrarInstrutor) {
        res.status(404).json({ mensagem: "Não existe instruitor" })
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }
    aulas.push(aula);
    return res.status(201).json(aula)
}

function listarAulas(req, res) {
    return res.status(200).json(aulas)
}

function obterAulas (req, res) {
    const { id } = req.params;
    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    })
    if (!aula){
        return res.status(404).json({mensagem:'Aula nao encontrada'})
    }

    return res.status(200).json(aula);
}

function obterAulasInstrutor (req, res) {
    const { idInstrutor } = req.params;

    const encontrarInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })
    if (!encontrarInstrutor) {
        res.status(404).json({ mensagem: "Não existe instruitor" })
    }
    const aulasDeCadaProfessor = aulas.filter((aula) => {
        return aula.instrutor_id === encontrarInstrutor.id;
    })
    

    return res.status(200).json(aulasDeCadaProfessor);
}
module.exports = {
    cadastrarAula,
    listarAulas,
    obterAulas,
    obterAulasInstrutor
}