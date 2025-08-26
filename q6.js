const leia = require('readline-sync');

let nome = leia.question('Qual o nome do colaborador? ');
let cargo = leia.questionInt('Qual o codigo do cargo do colaborador? ');
let salario = leia.questionFloat('Qual o salario do colaborador? ');

let novoSalario;

switch(cargo) {
    case 1:
        novoSalario = salario + (0.1 * salario)
        console.log(`O novo salario do gerente ${nome} e de R$ ${novoSalario}`);
        break;
    case 2:
        novoSalario = salario + (0.07 * salario)
        console.log(`O novo salario do vendedor ${nome} e de R$ ${novoSalario}`);
        break;
    case 3:
        novoSalario = salario + (0.09 * salario)
        console.log(`O novo salario do supervisor ${nome} e de R$ ${novoSalario}`);
        break;
    case 4:
        novoSalario = salario + (0.06 * salario)
        console.log(`O novo salario do motorista ${nome} e de R$ ${novoSalario}`);
        break;
    case 5:
        novoSalario = salario + (0.05 * salario)
        console.log(`O novo salario do estoquista ${nome} e de R$ ${novoSalario}`);
        break;
    case 6:
        novoSalario = salario + (0.08 * salario)
        console.log(`O novo salario do tecnico de TI ${nome} e de R$ ${novoSalario}`);
        break;
    default:
        console.log('Cargo invalido');
        break;
}