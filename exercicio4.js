/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
*/

function DividendoEDivisor(dividendo, divisor) {
    console.log(`Resultado da divisão de ${dividendo} por ${divisor}:`, Math.floor(dividendo / divisor))
    console.log(`Resto da divisão de ${dividendo} por ${divisor}:`, dividendo % divisor)
    console.log("")
}

DividendoEDivisor(4, 2)
DividendoEDivisor(10, 5)
DividendoEDivisor(7, 3)
