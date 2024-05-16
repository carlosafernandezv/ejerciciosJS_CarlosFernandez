


let btncalcular = document.getElementById("calcular");

btncalcular.addEventListener("click", function () {
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("estatura").value) / 100
    let imc = 0

    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura)
        document.getElementById("resultado").value = imc.toFixed(2)
    } else {
        alert("ingresa altura y peso validos")
    }
})

function dolaresPesos(valNum) {
    document.getElementById("dolar").value=valNum*1
}


function pesosDolares(valNum) {
    document.getElementById("pesos").value=valNum*3889
}


function convertirDolaresAPesos(dolares) {
    const tasaCambio = 3800; // Tasa de cambio actual (1 dólar = 3800 pesos)
    const pesos = dolares * tasaCambio;
    document.getElementById("inputPesos").value = pesos;
}

function convertirPesosADolares(pesos) {
    const tasaCambio = 3800; // Tasa de cambio actual (1 dólar = 3800 pesos)
    const dolares = pesos / tasaCambio;
    document.getElementById("inputDolares").value = dolares;
}