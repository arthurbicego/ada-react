// array.reduce()
// combinar elementos do array para chegar em um elemento/objeto único.

// exemplo 1: soma dos elementos de um array:

// const numeros = [1, 2, 3, 4, 5];
// const soma = numeros.reduce((acumulador, elemento, index, arrayCompleto) => {
//     console.log(acumulador);
//     return elemento + acumulador;
// }, 0);
// console.log(soma);

// exemplo 2: media

const numeros = [1, 2, 3, 4, 5];
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(media);

// exemplo 3: soma dos pares

const somaDosPares = numeros.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
        return numero + acumulador;
    } else {
        return acumulador;
    }
}, 0);

console.log(somaDosPares);

// exemplo 4: total a pagar do carrinho

const carrinho = [
    { produto: 'feijão', preco: 7.98, quantidade: 3 },
    { produto: 'arroz', preco: 4.98, quantidade: 5 },
    { produto: 'leite 1l', preco: 6.99, quantidade: 2 },
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador;
}, 0);

console.clear();
console.log(totalAPagar.toFixed(2));