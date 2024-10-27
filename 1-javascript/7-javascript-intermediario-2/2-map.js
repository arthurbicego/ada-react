// map - remapeia o conteúdo de um array original criando um novo array
// o novo array possui o mesmo tamanho do array original, porém composto pelos elementos que foram retornados a cada iteração
const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
    return elemento * 2;
})

console.log(novoArray);


// Exemplo: adicionando elemento num objeto
console.clear();

const carrinho = [
    { produto: 'Feijão', preco: 7.98, quantidade: 3 },
    { produto: 'Arroz', preco: 4.98, quantidade: 5 },
    { produto: 'Leite 1L', preco: 6.99, quantidade: 2 },
];

// const carrinhoComTotal = carrinho.map((elemento) => {
//     elemento.total = (elemento.preco * elemento.quantidade).toFixed(2);
// });

// Spread operator '...'
// const pessoa = {
//     nome: 'Walisson',
//     idade: 27,
//     altura: 1.77
// }

// const pessoaComPeso = {
//     ...pessoa,
//     peso: 79
// }

const carrinhoComTotal = carrinho.map((elemento) => {
    return {
        ...elemento,
        total: (elemento.preco * elemento.quantidade).toFixed(2),
    };
});

console.log(carrinhoComTotal);