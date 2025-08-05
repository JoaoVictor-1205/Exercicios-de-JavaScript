/**
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function taxaCrescimento(a1, tca1, a2, tca2) {
    if (a1 < a2) {
        if (tca1 > tca2) {
            let ano = 0
            while (a1 < a2) {
                a1 += tca1
                a2 += tca2
                ano++
            }
            return console.log(`A criança 1 ficará maior que a criança 2 em ${ano} anos`)
        } else {
            return console.log("A criança 1 é menor e não ultrapassará a criança 2,")
        }
    } else if (a2 < a1) {
        if (tca2 > tca1) {
            let ano = 0
            while (a1 > a2) {
                a1 += tca1
                a2 += tca2
                ano++
            }
            return console.log(`A criança 2 ficará maior que a criança 1 em ${ano} anos`)
        } else {
            return console.log("A criança 2 é menor e não ultrapassará a criança 1,")
        }
    } else {
        return console.log("As crianças tem a mesma altura")
    }
}
taxaCrescimento(130, 3, 140, 2)