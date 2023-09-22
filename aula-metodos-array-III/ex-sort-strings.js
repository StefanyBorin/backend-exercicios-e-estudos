// se por todos os nome com a letra minusculas ele ira ordenar de maneira correta
const pessoas = ['João', 'ana', 'carlos','Bruno'];

//ordenação decrescente
pessoas.sort((a, b)=>{
    return b.localeCompare(a); // se o valor der negativo ele ira retorar de maneira crescente, e se for positivo ira ordenar de maneira decrescente.
})

// ordenação crescente
pessoas.sort((a, b)=>{
    return a.localeCompare(b); // se o valor der negativo ele ira retorar de maneira crescente, e se for positivo ira ordenar de maneira decrescente.
})
console.log(pessoas);

//Usando o localeCompare para string

