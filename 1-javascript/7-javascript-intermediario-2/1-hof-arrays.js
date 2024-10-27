// continuação hof-arrays

// Array.every(): verificar se todos os elementos de um array seguem uma determinada condição

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

// também funciona com objetos
// pessoas.every((pessoa) => pessoa.idade > 18 && altura >= 1.60);

console.clear();

// Array.some(): verificar se algum elemento do array torna verdadeira uma condição
const numeros2 = [-1, 3, 7, -3, 5];

const retorno = numeros2.some((numero) => numero > 0);
console.log(retorno);