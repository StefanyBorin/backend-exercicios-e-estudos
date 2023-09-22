const usuarios = [
    {
        nome: "João",
        pets: []
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"]
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"]
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"]
    },
    {
        nome: "Antonio",
        pets: ["Naninha"]
    },
]

// for (let index = 0; index < usuarios.length; index++) {
//     const element = usuarios[index].pets;   
//     console.log(element.pets.length);

// }

for (const item of usuarios) {
const nome = item.nome;
const animais = item.pets.length;
const pet = animais < 2 ? "pet" : "pets";

    if(animais > 0){
        
        console.log(`Sou ${nome} e tenho ${animais} ${pet}.`);
    }else{
        console.log(`Sou ${nome} e não tenho ${pet}.`);
    }
}


