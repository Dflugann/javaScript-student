let isAtivo = false
isAtivo = true

console.log(isAtivo)

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os falsos>>>>')
console.log(!!0)
console.log(!!'')
console.log(!!(isAtivo = false))
console.log(!!null)
console.log(!!NaN)

let nome = ""
console.log(nome || 'nome desconhecido')

