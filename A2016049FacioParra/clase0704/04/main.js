function calcularDivisores() {
    const numero = parseInt(document.getElementById("numberInput").value);
    const resultadoDivisores = document.getElementById("resultado");
    
    if (isNaN(numero) || numero <= 0) {
        resultadoDivisores.innerHTML = "Por favor ingresa un número entero positivo válido.";
        return;
    }

    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    resultadoDivisores.innerHTML = `El número ${numero} tiene ${divisores.length} divisores: ${divisores.join(', ')}`;
}
