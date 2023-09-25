const bancodedados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,

    instrutores: [
        {
            id: 1,
            nome: 'Guilherme',
            email: 'guilherme.email.com',
            statu: true
        },
        {
            id: 2,
            nome: 'Otavio',
            email: 'otavio@email.com',
            statu: true
        },
    ],
    aulas: [
        {id: 1,
        instrutor_id: 1,
        titulo: 'Primeiro Servidor',
        descricao:'Construindo o primeiro servidor'}
    ]
}

module.exports = bancodedados;