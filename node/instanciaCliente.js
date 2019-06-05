const instA = require('./instaciaUnica')
const instB = require('./instaciaUnica')

const instC = require('./instanciaNova')()
const instD = require('./instanciaNova')()

instA.inc()
instA.inc()

console.log(instB.valor, instA.valor);

instC.inc()
instC.inc()

console.log(instD.valor, instC.valor)
