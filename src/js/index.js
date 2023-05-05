var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var mostrarNaTela = document.getElementById('mostrar-na-tela')

function calcular() {
    var imc = peso.value / (altura.value ** 2)

    mostrarNaTela.innerHTML = `SEU IMC: ${imc.toFixed(2)}`
}

function limpar() {
    
    mostrarNaTela.innerHTML = `SEU IMC:`
}