const leia = require('readline-sync');

let numA = leia.questionInt('Digite o primeiro numero: ');
let numB = leia.questionInt('Digite o segundo numero: ');
let numC = leia.questionInt('Digite o terceiro numero: ');

if (numA + numB > numC) {
    console.log(`${numA} + ${numB} = ${numA + numB} > ${numC}`);
    console.log(`A soma de A + B e maior que C`);
} else if (numA + numB < numC) {
    console.log(`${numA} + ${numB} = ${numA + numB} < ${numC}`);
    console.log(`A soma de A + B e menor que C`);
} else {
    console.log(`${numA} + ${numB} = ${numA + numB} = ${numC}`);
    console.log(`A soma de A + B e igual a C`);
}