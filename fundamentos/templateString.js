const nome = "Flavio"
const concatenacao = 'Meu nome é: ' +  nome;     

let template = `
Meu nome é :
${nome}`

console.log(concatenacao, template)

let up = texto => texto.toUpperCase()

let template2 = `
    Meu nome é: ${up('Flavio')}`
    console.log(template2)