/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

function media(notas){
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

console.log(media([10, 7, 8, 9]))
console.log(media([5, 6, 7, 8, 9]))