const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const mulheres = f => f.genero === "F"
const chinesas = f => f.pais === "China"
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

const axios = require(`axios`)
axios.get(url).then(response => {
    const funcionarios = response.data;
    
    const fun = funcionarios
    .filter(chinesas)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(fun)

})
