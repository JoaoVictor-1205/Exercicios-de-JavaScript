/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
 */

function numerosNegativos(numeros) {
    negativos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos.push(numeros[i]);
        }
    }
    return negativos;
}

console.log(numerosNegativos([1, -2, 3, -4, 5, -6])); 