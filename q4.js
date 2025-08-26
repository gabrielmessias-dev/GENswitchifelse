const leia = require('readline-sync');

console.log('Digite as caracteristicas do animal: ');

let caracteristica1 = leia.question('Vertebrado ou invertebrado? ');

if (caracteristica1 == 'vertebrado') {
    let caracteristica2 = leia.question('Ave ou mamifero? ');
        if (caracteristica2 == 'ave') {
            let caracteristica3 = leia.question('Carnivoro ou onivoro? ');
                if (caracteristica3 == 'carnivoro') {
                    console.log('Aguia');
                } else {
                    console.log('Pomba');
                }
        if (caracteristica2 == 'mamifero' ) {
            let caracteristica3 = leia.question('Onivoro ou herbivoro? ');
                if (caracteristica3 == 'onivoro') {
                    console.log('Homem');
                } else {
                    console.log('Vaca');
                }
        }
        }
}

if (caracteristica1 == 'invertebrado') {
    let caracteristica2 = leia.question('Inseto ou anelideo? ');
        if (caracteristica2 == 'anelideo') {
            let caracteristica3 = leia.question('Hematofago ou onivoro? ');
                if (caracteristica3 == 'hematofago') {
                    console.log('Sanguessuga');
                } else {
                    console.log('Minhoca');
                }
        }
        if (caracteristica2 == 'inseto') {
            let caracteristica3 = leia.question('Hematofoago ou herbivoro? ');
                if (caracteristica3 == 'hematofago') {
                    console.log('Pulga');
                } else {
                    console.log('Lagarta');
                }
        }
}