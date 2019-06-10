const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono..
const arq = fs.readFileSync(caminho, 'utf-8')
// console.log(arq);

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.node.user)
})
