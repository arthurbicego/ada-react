// high order functions (HOF) for arrays

// Array.forEach()
const numeros = [40, 34, 67, 89, 23, 10];

// function calcular (elemento) {
//     console.log(elemento);
// }
// numeros.forEach(calcular);

numeros.forEach((elemento, index, arrayCompleto) => {
    console.log(index, elemento, arrayCompleto);
})

console.clear();
// Array.find()
const encontrado = numeros.find((elemento) => {
    return elemento > 50;
})

console.log(encontrado);

console.clear();
const pessoas = [
    {
        nome: 'Pessoa 1',
        idade: 34,
        altura: 1.80
    },
    {
        nome: 'Pessoa 2',
        idade: 23,
        altura: 1.54
    },
    {
        nome: 'Pessoa 3',
        idade: 51,
        altura: 1.68
    },
]

const pessoaEncontrada = pessoas.find((pessoa) => {
    return pessoa.idade > 30 && pessoa.altura < 1.70;
})

console.log(pessoaEncontrada);

// Array.findIndex() - Muito parecido com o find, mas retorna o índice do elemento encontrado.