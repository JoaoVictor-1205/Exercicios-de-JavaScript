/**
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use 
 * comando switch. Crie um caso default para produto não existente.
 */

function lanchonete(produto, quantidade) {
    switch (produto) {
        case 100:
            console.log(`${quantidade} Cachorro Quente(s): R$` + (3.00 * quantidade).toFixed(2).replace(".", ","))
            break
        case 200:
            console.log(`${quantidade} Hamburguer Simples: R$` + (4.00 * quantidade).toFixed(2).replace(".", ","))
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer(s): R$` + (5.50 * quantidade).toFixed(2).replace(".", ","))
            break
        case 400:
            console.log(`${quantidade} Bauru(s): R$` + (7.50 * quantidade).toFixed(2).replace(".", ","))
            break
        case 500:
            console.log(`${quantidade} Refrigerante(s): R$` + (3.50 * quantidade).toFixed(2).replace(".", ","))
            break
        case 600:
            console.log(`${quantidade} Suco(s): R$` + (2.80 * quantidade).toFixed(2).replace(".", ","))
            break
        default:
            console.log("Produto inválido.")
    }
}

lanchonete(100, 2)
lanchonete(200, 2)
lanchonete(300, 4)
lanchonete(400, 3)
lanchonete(500, 6)
lanchonete(600, 1)
