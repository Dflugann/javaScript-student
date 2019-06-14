const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

const arquivo = fs.readFileSync(caminho, 'utf-8');
console.log(arquivo);

fs.readFile(caminho, 'utf-8', (err, sucess) => {
    if (err !== undefined) {
        LerArquivo = JSON.parse(sucess);
        data = LerArquivo.node;
        console.log(`${data.host}:${data.port}`)
    }
})

fs.readdir(__dirname, (err, arquivo) => {
    if (err !== undefined) {
        console.log("Conteudo da pasta.....");
        console.log(arquivo);
    }
})

const lerJson = require(__dirname + '/arquivo.json');
console.log(lerJson.node.pass)
