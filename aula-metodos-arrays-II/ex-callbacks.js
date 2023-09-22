// setInterval(()=>{
//     console.log("ola alunos e alunas");
// }, 2000)

// const imprimir = ()=>{
//     console.log("Hello alunos e alunas")
//     clearInterval(intervalo)
// }

// const intervalo = setInterval(imprimir, 2000);

// clearInterval()

let numero = 10;
const contador = setInterval(()=>{
    console.log(numero);
    numero--
    if( numero ===0){
        console.log('Booom!!!');
        clearInterval(contador)
    }
}, 1000);