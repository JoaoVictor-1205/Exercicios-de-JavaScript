/**
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
 */

function intervaloNumeros(numeros) {
    let dentro = 0;
    let fora = 0;
    for (let i = 0; i <= numeros.length; i++) {
        if (numeros[i] >= 10 || numeros[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(`${dentro} números estão dentro do intervalo [10, 20]`);
    console.log(`${fora} números estão fora do intervalo`);
}

intervaloNumeros([5, 15, 25, 10, 20]);

