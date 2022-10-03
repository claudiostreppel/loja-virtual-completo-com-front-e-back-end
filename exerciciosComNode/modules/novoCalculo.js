function novoDesconto(valProduto, perDesconto) {

    return valProduto - ((valProduto / 100) * perDesconto)

}

module.exports = novoDesconto