/**
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function caixa(valorSaque) {
    let quant100 = 0
    let quant50 = 0
    let quant10 = 0
    let quant5 = 0
    let quant1 = 0
    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                quant100++
                valorSaque -= 100
                break
            case 50:
                quant50++
                valorSaque -= 50
                break
            case 10:
                quant10++
                valorSaque -= 10
                break
            case 5:
                quant5++
                valorSaque -= 5
                break
            case 1:
                quant1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)
    }

    return elaborarResultado(quant100, quant50, quant10, quant5, quant1)


}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(quant100, quant50, quant10, quant5, quant1) {
    let resultado = ''

    if (quant100 > 0) {
        resultado += `${quant100} nota(s) de R$ 100. `
    }

    if (quant50 > 0) {
        resultado += `${quant50} nota(s) de R$ 50. `
    }

    if (quant10 > 0) {
        resultado += `${quant10} nota(s) de R$ 10. `
    }

    if (quant5 > 0) {
        resultado += `${quant5} nota(s) de R$ 5. `
    }

    if (quant1 > 0) {
        resultado += `${quant1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(caixa(1555));