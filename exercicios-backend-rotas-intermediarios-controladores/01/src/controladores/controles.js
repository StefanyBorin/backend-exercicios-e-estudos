function somar(req, res){
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    console.log(num1);
    return res.send(`${num1 + num2}`)
}

function subtrair(req, res){
    const{num1, num2} = req.query;
    let total = Number(num1) - Number(num2)
    return res.send(`${total}`)
}

function dividir(req, res){
    const{num1, num2} = req.query;
    let total = Number(num1) / Number(num2)
    return res.send(`${total}`)
}

function multiplicar(req, res){
    const{num1, num2} = req.query;
    let total = Number(num1) * Number(num2)
    return res.send(`${total}`)
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}