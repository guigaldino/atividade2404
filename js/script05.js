const numeroSistema = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {    
    const numeroUser = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (numeroSistema == numeroUser) {
        resultado.innerHTML = "Acertou, parabéns!"
    } else if (numeroSistema > numeroUser){
        resultado.innerHTML = "Maior"
    } else {
        resultado.innerHTML = "Menor"
    }
}