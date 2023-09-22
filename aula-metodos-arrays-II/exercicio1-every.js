const idade = [
    {idade: 20, nome: "Carlos"}, {idade: 20,nome: "Ana"}, {idade: 18, nome: "Cris"}, {idade: 20, nome: "Juh"}
];

const validarIdade = (arrayObjetos)=> {
    const resultado = arrayObjetos.every((objeto)=>{
        return objeto.idade > 17; //condição de retorno
    });
    if (resultado) {
        console.log("Festa liberada!");
    }else{
        console.log("Possui menor de idade");
    }
};
validarIdade(idade)
