function validarCPF() {
    let cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/\D/g, '');

    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        resultado.innerText = "CPF inválido.";
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito >= 10) primeiroDigito = 0;

    if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
        resultado.innerText = "CPF inválido.";
        return;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito >= 10) segundoDigito = 0;

    if (parseInt(cpf.charAt(10)) !== segundoDigito) {
        resultado.innerText = "CPF inválido.";
    } else {
        resultado.innerText = "CPF válido.";
    }
}
