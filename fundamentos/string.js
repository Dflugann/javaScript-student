const escola = "Cod3r"
let nomes = 'Ana,Luciana,Gabriel'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))
console.log(escola.substring(1))
console.log(escola.substring(1, 3))

console.log('Escola '.concat(escola).concat('!!!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(nomes.split(','))