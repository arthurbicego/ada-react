function saudacao(nomeDoEstudante, curso = "Valor Padrão caso não seja passado nenhum parâmetro.") {
    console.log('Bem vindo,', nomeDoEstudante, '! Este é o curso', curso);

    // concatenação
    console.log('Bem vindo, ' + nomeDoEstudante + '!');

    // template string
    console.log(`Bem vindo, ${nomeDoEstudante}!`);

    // retorno da função
    return true;
}

console.log(saudacao('Arthur', 'Front-end em React'));

function somar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = somar(2, 3);
console.log(resultado / 10);

// funcoes anonimas -> útil para funções de alta ordem (atribuir funções para funções)
// isso só é possível devido ao paradigma de programação funcional (First Class Functions) - trata funções como se fossem variáveis.
const dobroNumero = function (numero) {
    return numero * 2;
}

// arrow function
const subtrair = (numero1, numero2) => {
    return numero1 - numero2;
}

// é possível omitir o return, caso o escopo da função possa ser apenas uma linha
const multiplicar = (numero1, numero2) => numero1 * numero2; 