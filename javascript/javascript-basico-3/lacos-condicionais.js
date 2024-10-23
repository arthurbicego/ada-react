// while / do while
const prompt = require('readline-sync');
// let saldo = Number(prompt.question('Qual é o seu saldo? '));
// console.log(saldo, typeof saldo);

// while (saldo < 0) {
//     saldo = Number(prompt.question('Saldo inválido. Informe novamente: '));
// };

// console.log(saldo);

// // pré e pós incremento

// let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '));

// let somaDasNotas = 0;
// let qtdNotasValidas = 0;

// while (notaDoAluno >=0) {
//     somaDasNotas += notaDoAluno;
//     qtdNotasValidas ++;

//     notaDoAluno = Number(prompt.question('Informe a próxima nota: '));
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);
// console.log('Média das notas dos alunos: ', somaDasNotas / qtdNotasValidas);

// Exemplo 3

// const numeroAleatorio = parseInt(Math.random() * 10);

// let quantidadeDeTentativas = 0;

// let numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: '));

// console.log(numeroAleatorio);

// while (numeroAleatorio !== numeroDoUsuario) {
//     console.log("Você errou o número! Tente novamente...");
//     numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: '));
// }

// console.log('Parabéns, Você acertou! O número era :', numeroAleatorio);

// Exemplo 4

// let contador = 0;

// whilhe (contador < 5) {
//     console.log(contador);
//     contador++;

//     // break e continue não são indicados porque interrompem o fluxo do loop, não é utilizado.
//     // break, quebra o loop.
//     // continue pula para o início do loop e continua.
//     if(contador ===2){
//         // break
//         continue;
//     }

//     console.log('Depois do if...');
// }

// Exemplo 5
// do-while força o código a executar pelo menos uma vez.

let saldo;

do {
    saldo = Number(prompt.question('Informe um saldo válido: '));
} while (saldo < 0);

console.log(saldo);