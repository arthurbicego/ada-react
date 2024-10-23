const prompt = require('readline-sync');

// exemplo 1

// for (let i = 0; i < 5; i++) {
//     console.log('indice', i);
// }

// let i = 223123123142412412;

// console.log(i);

// exemplo 2

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//     numeroInformado = Number(prompt.question('Informe um número positivo: '));

//     if(numeroInformado > maiorNumero) {
//         maiorNumero = numeroInformado;
//     }
// }

// console.log('Maior número:', maiorNumero);

// exemplo 3

// const nome = 'Walisson';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);

//     // no for também funcionam o break e o continue.
//     if (i === 4) {
//         break;
//     }
// }

// ----- ARRAYS -----
// Tipos primitivos: number, string, boolean
// Estrutura de dados: arrays, maps, objects, stack, queue,...

// const notasDoAluno = [10, 8, 5];
// const pessoa = ["Wallison", 27, 1.77, true];

// // principais métodos:
// // slice
// const numeros = [40, 34, 67, 89, 23, 10];

// console.log(numeros.slice(2,4));

// // push
// numeros.push(0);
// console.log(numeros);

// // unshift
// numeros.unshift(-1);
// console.log(numeros);

// // pop - remover elemento no final
// numeros.pop();
// console.log(numeros);

// // shift - remover elemento no início
// numeros.shift();
// console.log(numeros);

// // includes - verificar se existe
// console.log(numeros.includes(20));

// // indexOf - verificar indice // retorna -1 se não encontrar
// console.log(numeros.indexOf(20));

// lastIndexOf - verifica o indice do ultimo elemento com aquele valor
// exemplo: let numeros = [10, 23, 32, 45, 10, 23];
// lastIndex(10) retorna 4

// for of - percorre os elementos
const arr = [45, 36, 90, 76, 32, 7];

for (const element of arr) {
    console.log(element);
}

// for in - percorre os índices
for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}