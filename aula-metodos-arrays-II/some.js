//retorna se pelo menos 1 item corresponde a codição ou teste

const letras = ["a", "b", "c"];

const conter = letras.some((array)=>{
    return array==="c"
})

console.log(conter);