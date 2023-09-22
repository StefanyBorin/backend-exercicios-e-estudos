const professores = [
    { nome: "guido", stack: "backend" },
    { nome: "vidal", stack: "backend" },
    { nome: "dani", stack: "frontend" },
    { nome: "diego", stack: "frontend" }
]
//filtra os professores de backend
const backend = professores.filter((professor) => {
    return professor.stack === "backend"
})

//filtra os professores de frontend
const frontend = professores.filter((professor) => {
    return professor.stack === "frontend"
})


console.log(backend);
console.log(frontend);