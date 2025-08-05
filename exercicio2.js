/**
 *  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 *  Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 *  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 *  ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 *  triângulo).
 * 
*/

function TypeTriangle(lado1, lado2, lado3) {
    if ((lado1 == lado2) & (lado3 == lado2)) {
        console.log("O triângulo é do tipo Equilátero.")
    } else if ((lado1 == lado2) | (lado1 == lado3) | (lado2 == lado3)) {
        console.log("O triângulo é do tipo Isósceles.")
    } else {
        console.log("O triângulo é do tipo Escaleno.")
    }
}

TypeTriangle(3, 3, 3)
TypeTriangle(3, 3, 4)
TypeTriangle(3, 4, 5)