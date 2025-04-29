/* Obtner las referencias de los objetos que se van a programar */
const calif = document.getElementById("calif")
const nota = document.getElementById("nota")
const btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", e => {
    e.preventDefault()
    let c = parseInt(calif.value);
    let n = ""
    if (c==100)
        n="Excelente";
    else if (c>=90 && c<=99)
        n="Muy bien";
    else if (c>=80 && c<=89)
        n="Bien";
    else if (c>=70 && c<=79)
        n="Regular";
    else if (c>=0 && c<=69)
        n="Mal";
    else
        n="Error!";

    nota.value=n;
});
/* Ciclo for */
for (let i=1;i<=10;i++){
    console.log(i);
}

const num = document.getElementById("numero")
const total_divisores = document.getElementById("total_divisores")
const btn_calcular = document.getElementById("btn_calcular")
const lista_divisores = document.getElementById("lista_divisores")

btn_calcular.addEventListener("click", e=> {
    e.preventDefault()
    let n = parseInt(num.value);
    let divisores = 0;
    let list_divi = [];

    if (isNaN(n) || n <= 0) {
        alert("Ingresa un número entero positivo");
        lista_divisores.value = "";
        total_divisores.value = "";
        return;
    }

    for (let i=1;i<=n;i++){
        if(n%i==0){
            divisores++
            list_divi.push(i)
        }
    }
    total_divisores.value = divisores;
    lista_divisores.value = list_divi.join(", ");
});
