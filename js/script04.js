function gerarPares() {
    const limite = parseInt(document.getElementById("limite").value);
    const resultado = document.getElementById("resultado")
    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    
    resultado.innerHTML = `A soma dos pares entre 1 e ${limite} é: ${soma}`;
}