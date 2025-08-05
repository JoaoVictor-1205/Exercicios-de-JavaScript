/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

function maiorMenorNumero(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return { maior, menor };
}

console.log(maiorMenorNumero([3, 5, 7, 2, 8, -1, 4]));