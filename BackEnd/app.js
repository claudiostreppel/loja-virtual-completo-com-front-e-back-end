let express = require("express")

let app = express()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'claudio',
    password: '123456',
    database: 'celke'
})

connection.connect(function (err) {
    if (err) {
        console.error('erro de conexão:  ' + err.stack)
        return
    }
    console.log('conectado com a id..: ' + connection.threadId)
})


//inserindo dados no banco de dados
function insere() {
connection.query("INSERT INTO users(nome, email) VALUES ('patricia', 'paty@paty.pet')", function (err, result) {
    if (!err) {
        console.log('usuario cadastrado com sucesso')
    } else {
        console.log('houve um erro')
    }
})}

//insere()

//alterando dados no banco de dados
function altera() {
    connection.query("UPDATE users SET nome = 'claudio' WHERE id=2", function (err, result) {
        if (!err) {
            console.log('usuario alterado com sucesso')
        } else {
            console.log('houve um erro')
        }
    })
}
 //altera()


//apagando dados no banco de dados
function apagar() {

    connection.query("DELETE FROM users WHERE id = 2", function (err, result) {
        if (!err) {
            console.log('usuario deletado com sucesso')
        } else {
            console.log('houve algum erro, contate o super Claudio')
        }
    })
}

//apagar()

connection.query('SELECT * FROM USERS', function (err, rows, fields) {
    if (!err) {
        console.log('resultado:', rows)
    } else {
        console.log('tabela não existe ' + err)
    }
})


 
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/src/index.html")
})
app.get("/cadastroProduto", function (req, res) {
    res.sendFile(__dirname + "/src/cadastroProduto.html")
})
app.get("/blog", function (req, res) {
    res.send("blog")
})
app.get("/contato", function (req, res) {
    res.send("contato")
})


app.listen(8080)