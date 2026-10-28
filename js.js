let nome = "kirk"
let peso = 69
let altura = 1.67
calcularIMC(peso, altura)

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Baixo peso"
    }
    if (imc < 25) {
        return "Peso adequado"
    }
    if (imc < 30) {
        return "Sobrepeso"
    }
    if (imc < 35) {
        return "Obesidade grau I"
    }
    if (imc < 40) {
        return "Obesidade grau II"
    }
    return "Obesidade grau III"
}

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    console.log("IMC: " + imc.toFixed(2))
    console.log("Classificação para adultos (19 a 59 anos): " + classificarIMC(imc))
    return imc
}