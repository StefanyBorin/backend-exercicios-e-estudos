const numeroCartao = '1111222233334444';

 const parte1 = numeroCartao.slice(0, 4)
 const parte3= numeroCartao.slice(12)

let refatorando = parte1 + parte3.padStart(16, "*");

console.log(refatorando);

