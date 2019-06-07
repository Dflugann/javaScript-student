console.log(this == global)
console.log(this == module)
console.log(this == module.exports);
console.log(this == exports)

 function testThis() {
    console.log('Teste do log')
    console.log(this == exports)
    console.log(this == module.exports)
    console.log(this == global)
     this.nome = "Flavio"
}

let teste = testThis()
