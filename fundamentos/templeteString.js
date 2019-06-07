let nome = 'Flavio'
let concatenando = 'Olá ' + nome + '!'

console.log(concatenando)

const template = `
    ola ${nome}!
`
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`Ei.... ${up('não faça isso')}!!!`)

