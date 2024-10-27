// filter
// O filter é parecido com o map, porém o novo array convertido pode ter um tamanho igual OU MENOR do tamanho original.

const valores = [40, 34, 67, 89, 23, 16, 10];

const parEncontrado = valores.find((valor) => valor % 2 === 0);
console.log(parEncontrado);

const elementosPares = valores.filter((valor) => valor % 2 === 0);
console.log(elementosPares);

