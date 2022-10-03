let valproduto = 100
let perDesconto = 50
let novoCalculo = require("./modules/novoCalculo")

let calcResultado = novoCalculo( valproduto, perDesconto)

console.log('O valor do novo calculo é' + calcResultado )