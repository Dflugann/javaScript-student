function tratarErrorLancar(error) {
    throw new error.name
}
function imprimirError(obj) {
    try {

        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e) {
        tratarErrorLancar(e)
    } 
}

const obj = {name: "Flavio"}

imprimirError(obj)