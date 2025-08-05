/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 */

function analisarDesempenho(pontuacoesString) {
    const pontuacoes = pontuacoesString.split(' ').map(Number)

    if (pontuacoes.length <= 1) {
        return [0, pontuacoes.length]
    }

    let melhorPontuacao = pontuacoes[0]
    let piorPontuacao = pontuacoes[0]
    let quebraRecords = 0
    let indicePiorJogo = 1

    for (let i = 1; i < pontuacoes.length; i++) {
        const pontuacaoAtual = pontuacoes[i]
        const numeroDoJogo = i + 1

        if (pontuacaoAtual > melhorPontuacao) {
            melhorPontuacao = pontuacaoAtual
            quebraRecords++
        }

        if (pontuacaoAtual < piorPontuacao){
            piorPontuacao = pontuacaoAtual
            indicePiorJogo = numeroDoJogo
        }
    }

    return [quebraRecords, indicePiorJogo]
}

const jogos = "10 20 20 8 25 3 0 30 1";
const resultado = analisarDesempenho(jogos);

console.log(resultado);