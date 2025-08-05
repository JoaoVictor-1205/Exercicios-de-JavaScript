/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

function parImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`${numeros[i]} é par`);
        } else {
            console.log(`${numeros[i]} é ímpar`);
        }
    }
}

parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);