function generarTablas() {
    const tablaInicio = parseInt(document.getElementById('tablaInicio').value);
    const tablaFin = parseInt(document.getElementById('tablaFin').value);
    const contenedorTablas = document.getElementById('tablas');

    // Limpiar cualquier tabla previa
    contenedorTablas.innerHTML = '';

    if (isNaN(tablaInicio) || isNaN(tablaFin)) {
        alert('Por favor ingrese valores válidos.');
        return;
    }

    // Verificar que la tabla inicial sea menor o igual a la tabla final
    if (tablaInicio > tablaFin) {
        alert('La tabla inicial debe ser menor o igual a la tabla final.');
        return;
    }

    // Generar las tablas
    for (let tabla = tablaInicio; tabla <= tablaFin; tabla++) {
        const divTabla = document.createElement('div');
        divTabla.classList.add('tabla');
        let htmlTabla = `<h3>Tabla del ${tabla}</h3><ul>`;

        for (let i = 1; i <= 10; i++) {
            htmlTabla += `<li>${tabla} x ${i} = ${tabla * i}</li>`;
        }

        htmlTabla += '</ul>';
        divTabla.innerHTML = htmlTabla;
        contenedorTablas.appendChild(divTabla);
    }
}
