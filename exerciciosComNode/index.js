console.log("Gerenciador Financeiro")

let discountFunc = require("./modules/calDiscount")

let valProduct = 100
let valDiscount = 37

console.log("Valor do produto é R$ " + valProduct)
console.log("Valor do Desconto é de R$ " + valDiscount)

var finalValue = discountFunc(valProduct, valDiscount)

console.log("O Valor liquido do Produto é de R$" + finalValue)