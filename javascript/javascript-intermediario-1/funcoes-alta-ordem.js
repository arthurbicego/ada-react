// High Order Function é uma consequência do First Class Function
// First Class Function é tratar as funções como se fossem variáveis

// High Order Function é uma função pode receber como parâmetro uma função. Ou uma função que pode retornar outra função.

// 1. Função que retorna outra função (closure) - este tipo é mais utilizado para funções complexas em bibliotecas, mais avançado.
function welcome(courseName) {
    return (studentName) => {
        console.log(`Olá, ${studentName}! Seja bem vindo(a) ao curso de ${courseName}!`);
    }
}

const displayWelcomeFrontEndCourse = welcome('Front-end em React');
displayWelcomeFrontEndCourse('Arthur');

// 2. Função que recebe outra função como parâmetro - este tipo é mais comumente utilizado.
const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2);
console.log(calcular(2, 3, somar));
console.log(calcular(2, 3, multiplicar));

// 26 minutos