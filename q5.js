const leia = require('readline-sync');

let codigo = leia.questionInt('Digite o codigo do produto: ');
let quantidade;

switch (codigo) {
    case 1:
        console.log('Item escolhido: Cachorro-quente. Preço unitario: R$ 10.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: Cachorro-quente.\nTotal: R$ ${quantidade * 10}.00`);
        break;
    case 2:
        console.log('Item escolhido: X-Salada. Preço unitario: R$ 15.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: X-Salada.\nTotal: R$ ${quantidade * 15}.00`);
        break;
    case 3:
        console.log('Item escolhido: X-Bacon. Preço unitario: R$ 18.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: X-Bacon.\nTotal: R$ ${quantidade * 18}.00`);
        break;
    case 4:
        console.log('Item escolhido: Bauru. Preço unitario: R$ 12.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: Bauru.\nTotal: R$ ${quantidade * 15}.00`);
        break;
    case 5:
        console.log('Item escolhido: Refrigerante. Preço unitario: R$ 8.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: Refrigerante.\nTotal: R$ ${quantidade * 8}.00`);
        break;
    case 6:
        console.log('Item escolhido: Suco de Laranja. Preço unitario: R$ 13.00');
        quantidade = leia.questionInt('Digite a quantidade: ');
        console.log(`Produto escolhido: Suco de Laranja.\nTotal: R$ ${quantidade * 13}.00`);
        break;
    default:
        console.log('Opcao invalida');
        break;
}