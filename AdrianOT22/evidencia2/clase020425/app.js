/*const GRUPO = 52;
let numero1 = 45;
let numero2 = 12;
let suma = 0;
let lenguajes = ["javascript", "c#", "python"]

suma = numero1 + numero2;

console.log(lenguajes);
console.log(GRUPO);
console.log(`La suma es ${suma}`);
document.write(`La suma es ${suma}`);
console.log(`El segundo lenguaje es: ${lenguajes[1]}`);
let ultimo = lenguajes[lenguajes.length -1];
console.log(`El último lenguaje es: ${ultimo}`)*/

/*let suma = 0;
let n1,n2;

n1 = parseInt(prompt("Ingresa un numero "));
n2 = parseInt(prompt("Ingresa otro numero"));

suma = n1+n2;

alert(`La suma es ${suma}`)*/

let total_compra;
let color;
let descuento;
let total_pagar;

total_compra = parseFloat(prompt("Total de compra?"))
color = prompt("Color?")
if (color=="blanca") {
    descuento = total_compra*0.10;
    total_pagar = total_compra-descuento;
}
else if (color=="roja") {
    descuento = total_compra*0.08;
    total_pagar = total_compra-descuento;
}
else if (color=="oro") {
    descuento = total_compra*0.99;
    total_pagar = total_compra-descuento;
}
else {
    descuento = 0;
    total_pagar = total_compra;
}

console.log(`Tu compra fue: ${total_compra}`);
console.log(`Tu descuento es: ${descuento}`);
console.log(`El total a pagar es: ${total_pagar}`);
