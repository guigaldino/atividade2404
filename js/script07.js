function gerarPrimos() {
    const inicio = parseInt(document.getElementById("numeroInicial").value);
    const fim = parseInt(document.getElementById("numeroFinal").value);
    let resultado = "";

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        resultado = "Por favor, insira valores válidos (inicial menor ou igual ao final).";
    } else {
        for (let i = inicio; i <= fim; i++) {
            if (ehPrimo(i)) {
                resultado += i + " ";
            }
        }
    }

    document.getElementById("resultado").innerText = resultado.trim();
}

function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
