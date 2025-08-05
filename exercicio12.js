/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

// function fatorial(numero) {
//     if(numero == 0) {
//         return 1
//     }
//     let numeroFatorial = numero
//     for (let i = numero; i > 1; i--) {
//         numeroFatorial = numeroFatorial * (i - 1)
//     }
//     return numeroFatorial
// }

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))
console.log(fatorial(4))