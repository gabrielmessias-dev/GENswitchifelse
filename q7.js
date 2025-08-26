const leia = require('readline-sync');

let num1 = leia.questionFloat('Digite o primeiro numero: ');
let num2 = leia.questionFloat('Digite o segundo numero: ');
let operacao = leia.questionInt('Digite a operacao que deseja realizar: ');

switch(operacao) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log('Operacao invalida');
        break;
}