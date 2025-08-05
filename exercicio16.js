/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

function calculadoraBasica(numero1, numero2, operacao) {
    switch (operacao) {
        case "+":
            console.log(`A soma de ${numero1} por ${numero2} é:`, numero1 + numero2)
            break
        case "*":
            console.log(`A multiplicação de ${numero1} por ${numero2} é:`, numero1 * numero2)
            break
        case "/":
            console.log(`A divisão de ${numero1} por ${numero2} é:`, numero1 / numero2)
            break
        case "-":
            console.log(`A subtração de ${numero1} por ${numero2} é:`, numero1 - numero2)
            break
        default:
            console.log("Operação inválida.")
    }
}

calculadoraBasica(2, 4, "+")
calculadoraBasica(2, 4, "*")
calculadoraBasica(2, 4, "/")
calculadoraBasica(2, 4, "-")
calculadoraBasica(2, 4, "=")



