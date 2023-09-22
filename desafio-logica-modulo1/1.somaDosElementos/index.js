const valores = [10, 50, 50, 83, 25, 60]
function solucao(lista) {
  let somaEconomias = 0;
  for (let item of lista) {
    somaEconomias += item
  }
  console.log(somaEconomias);
}

solucao(valores)
