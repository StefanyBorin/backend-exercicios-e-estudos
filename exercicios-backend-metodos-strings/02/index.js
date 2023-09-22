const cpf = "1234567891022";
const cnpj = "123456789123001212";

function formatandoCPF(number){

    let numberFormatado = "";
    if(number.length < 11 || number.length > 11 ){
        console.log("CPF Inválido");
    }else{
        let part1 = number.slice(0,3);
        let part2 = number.slice(3,6);
        let part3 = number.slice(6, 9);
        let part4 = number.slice(9);
    
        numberFormatado = part1+ "."+ part2 +"." + part3 + "-"+part4;
    
        console.log(numberFormatado);
    }

}

formatandoCPF(cpf)

function formatandoCNPJ(number){
    let numberFormatado = "";
    if (number.length < 14 || number.length > 14) {
        console.log("CNPJ Inválido");
    }else{

        let part1 = number.slice(0,2);
        let part2 = number.slice(2,5);
        let part3 = number.slice(5, 8);
        let part4 = number.slice(8, 12);
        let part5 = number.slice(12);
        
        numberFormatado = part1+ "."+ part2 +"." + part3 + "-"+part4+ "/"+ part5;
        console.log(numberFormatado);
    }
}

formatandoCNPJ(cnpj)

