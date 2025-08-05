/**
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
 * primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
 */

function trocarElementos(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]];
    }
}

let A = [1, 2, 3];
let B = [4, 5, 6];

trocarElementos(A, B);

console.log(A); 
console.log(B); 
