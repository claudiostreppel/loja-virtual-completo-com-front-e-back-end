//instanciar o servidor
var http = require('http')


//criar o servidor
http.createServer(function (req, res) {
    res.end("gerenciador de dinheiro")
}).listen(8080)

