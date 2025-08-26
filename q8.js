const leia = require('readline-sync');

let operacao = leia.questionInt('Digite a operacao que deseja realizar: ');

let saldo = 1000;
let valor;

switch (operacao) {
    case 1:
        console.log(`Seu saldo e de R$ ${saldo}`);
        break;
    case 2:
        valor = leia.questionFloat('Digite o valor que deseja sacar: ');
        if (valor > saldo) {
            console.log('Saldo insuficiente');
            break;
        }
        if (valor <= 0) {
            console.log('Valor invalido para saque. ');
            break;
        }
        saldo -= valor;
        console.log(`Seu saldo e de R$ ${saldo}`);
        break;
    case 3:
        valor = leia.questionFloat('Digite o valor que deseja depositar: ');
        if (valor <= 0) {
            console.log('Valor invalido para deposito. ');
            break;
        }
        saldo += valor;
        console.log(`Seu saldo e de R$ ${saldo}`);
        break;
    default:
        console.log('Operacao invalida');
        break;
}