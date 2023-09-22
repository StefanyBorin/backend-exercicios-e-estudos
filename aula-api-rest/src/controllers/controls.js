const { instrutores } = require('../bancodedados')

function listarInstrutores(req, res) {
    return res.status(300).json(instrutores)
}


module.exports={
    listarInstrutores
}