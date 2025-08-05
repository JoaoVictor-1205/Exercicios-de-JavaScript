/**
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */
function valorPlanoDeSaude(idade) {
    let valorAdicional = calcularValorAdicional(idade)
    let valorAPagar = 100
    switch(valorAdicional){
        case 1:
            return elaborarResultado(valorAPagar + 80, idade)
        case 2:
            return elaborarResultado(valorAPagar + 50, idade)
        case 3:
            return elaborarResultado(valorAPagar + 95, idade)
        case 4: 
            return elaborarResultado(valorAPagar + 130, idade)
        default:
            return console.log("Idade Inválida.")
    }
}

function calcularValorAdicional(idade) {
    if (idade < 10){
        return 1
    }else if (idade >= 10 && idade <= 30){
        return 2
    }else if (idade > 30 && idade <= 60){
        return 3
    }else {
        return 4
    }
}

function elaborarResultado(valorAPagar, idade) {
    console.log(`O valor a pagar referente a sua idade(${idade} anos) é de R$${valorAPagar}`)
}

valorPlanoDeSaude(10)