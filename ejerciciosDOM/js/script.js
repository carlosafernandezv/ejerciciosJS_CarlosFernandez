let mensagem = document.getElementById("resultado");
let peso = document.getElementById("peso");
let altura = document.getElementById("estatura");
let btn = document.getElementById("calcular");
let error = document.getElementById("error");


btn.addEventListener("click", function () {

    let imc = peso.value / (estatura.value * estatura.value);
    resultado.innerText = "Su IMC es: " + imc
    peso.value = ""
    estatura.value = ""

})


