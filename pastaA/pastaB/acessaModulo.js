const moduloA = require('../../node/nodeA')

console.log(moduloA.idade)


const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write("Boa noite, Pravaler")
    res.end()
}).listen(8080)

const c = require('./pastaC')
console.log(c.ola2)


