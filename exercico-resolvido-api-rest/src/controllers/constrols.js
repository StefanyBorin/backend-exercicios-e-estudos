let { instrutores, identificadorInstrutor } = require('../bancodedados');

function listarInstrutores(req, res) {
    return res.status(300).json(instrutores);
}

function obterInstrutor(req, res) {
    const {id}=req.params;
    
    const idInstrutor = instrutores.find((instrutor)=>{
        return instrutor.id === Number(id);
    });
    
    if (!idInstrutor) {
        return res.status(404).json({mensagem:'instrutor nao encontrado'});
    }
    return res.status(200).json(idInstrutor);
    
}
function cadastrarInstrutor(req, res){
    const{nome, email, status}=req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatorio'})
    }
    if (!email) {
        return res.status(400).json({mensagem: 'O email é obrigatorio'})
    }
    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
    // status pode ser o que vem no req, ou sera true caso nao exista no req
        status: status ?? true
    }
    instrutores.push(instrutor)

    // foi criado uma nova coleção
    return res.status(201).json(instrutor)
}

function atualizarInstrutor(req, res){
    const { nome, email, status} = req.body;
    const {id} = req.params;

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatorio'})
    }
    if (!email) {
        return res.status(400).json({mensagem: 'O email é obrigatorio'})
    }
    if (!status) {
        return res.status(400).json({mensagem: 'O status é obrigatorio'})
    
    }
    const instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({mensagem:'instrutor nao encontrado'});
    }
    instrutor.email = email;
    instrutor.nome = nome;
    instrutor.statu = status;

    return res.status(204).send("atualizado com sucesso!")
}

function atualizarStatus(req, res) {
    const {status} = req.body;
    const {id} = req.params;

    const instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({mensagem:'instrutor nao encontrado'});
    }
    instrutor.statu = status;
    return res.status(204).send()
}

function excluirInstrutor(req, res){
    const {id} = req.params;
    const instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === Number(id);
    })
    if(!instrutor){
        return res.status(404).json({mensagem:"O instrutor não encontrado"})
    }

    //sobrescrevendo o banco de dados tirando o que foi encontrado no find();
    instrutores = instrutores.filter((instrutor)=>{
        return instrutor.id !== Number(id);
    })
    return res.status(204).send();
}

module.exports={
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatus,
    excluirInstrutor
}