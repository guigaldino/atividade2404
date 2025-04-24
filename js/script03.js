function identificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    console.log(idade)

    if (idade >= 0 && idade <= 3) {
        resultado.innerHTML = "Bebê";
    } else if (idade >= 3 && idade <= 13) {
        resultado.innerHTML = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        resultado.innerHTML = "Adolescente";
    } else if (idade >= 17 && idade < 60) {
        resultado.innerHTML = "Adulto";
    } else if (idade >= 60) {
        resultado.innerHTML = "Idoso";
    } else {
        resultado.innerHTML = "Idade inválida";
    }
}