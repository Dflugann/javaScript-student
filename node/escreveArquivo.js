const fs = require('fs');

const produtos = {
    nome: "Celular",
    preco: 1.600,
    desc: 0.06
}


fs.writeFile(__dirname + '/arquivosGerado.json', JSON.stringify(produtos), err => {
    if (err !== undefined) {
        console.log('Arquivo gravado com SUCESSO!!!');
    }
})