
function gerarFatorial() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    let fatorial = 1;

    if (numero < 0) {
        resultado.innerHTML = "Fatorial não existe para números negativos."
        return;
    }

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.innerHTML = `O fatorial de ${numero} é: ${fatorial}`
}