const meuDinheiro = 8000;
const valorTenis = 12999;
const desconto = valorTenis - meuDinheiro


let descontoPorcentagem = (desconto * 100) / valorTenis;

console.log(`O valor de cupom de desconto é ${descontoPorcentagem}%`);