/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
*/

function JurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const juroPorPeriodo = (capitalInicial * taxaDeJuros) / 100;
    const juroTotalAcumulado = juroPorPeriodo * tempoDeAplicacao;
    const montante = capitalInicial + juroTotalAcumulado;
    return montante;
}
console.log("R$:" + JurosSimples(10, 10, 10))

function JurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const taxaDecimal = taxaDeJuros / 100;
    const montante = capitalInicial * (1 + taxaDecimal) ** tempoDeAplicacao;
    return montante;
}
console.log("R$:" + JurosCompostos(10, 10, 10))