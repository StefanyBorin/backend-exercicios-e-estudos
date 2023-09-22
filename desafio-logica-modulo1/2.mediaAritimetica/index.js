const valores = [1, 2, 3, 4, 5]

function solucao(lista) {
  let somaEconomias = 0;
  for (let item of lista) {
    somaEconomias += item / lista.length
  }
  console.log(somaEconomias);
}

solucao(valores)
