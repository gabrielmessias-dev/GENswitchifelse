const leia = require ('readline-sync');

let nome = leia.question('Digite o nome do doador: ');
let idade = leia.questionInt('Digite a idade do doador: ');
let primeiraDoacao = leia.keyInYN('Primeira doacao de sangue? Responda com S ou N: ');

if (idade >= 18 && idade < 60) {
    console.log(`${nome} esta APTO para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && primeiraDoacao) {
    console.log(`${nome} NAO ESTA apto para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && !primeiraDoacao) {
    console.log(`${nome} esta APTO para doar sangue!`);
} else {
    console.log(`${nome} NAO ESTA apto para doar sangue!`);
}
