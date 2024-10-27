// comparação == valores iguais (faz coerção de tipo); === identifica tipos diferentes
// 10 == "10", 10 === 10
// Boa prática usar sempre ===

const prompt = require('readline-sync');
const idade = Number(prompt.question('Qual é a sua idade? '));

if (idade >= 18) {
    console.log('Você deve votar!');
} else if (idade >= 16) {
    console.log('Você pode votar!');
} else {
    console.log('Você não pode votar!');
}

// switch case - útil quando a variável possui valores específicos
const permissoes = 'professor'; // aluno || professor || admin

switch (permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break;
    case 'professor':
        console.log('Você pode adicionar ou removar as aulas.');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema.');
        break;
    default:
        console.log('O sistema não reconhece seu cadastro.');
}

// operador ternario
const idadeA = 21;
const mensagem = idadeA >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(mensagem);

// Truethy e Falsy - o que é considerado como true e false:
// Falsy (considerado como false): 0, undefined, null, '', NaN
// Tuethy (considerado como true): demais valores