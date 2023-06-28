
// calcular el prestamo
function calcularPrestamo(e) {

    e.preventDefault();

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let monto = parseInt(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);

    // corroborar edad usuario
    if (edad >= 18) {

        // calcular el préstamo
        let prestamo = new PrestamoUsuario(nombre, monto, cuotas);
        prestamo.calcularIntereses();
        let datosPrestamo = prestamo.obtenerDatos();

        // Mostrar los datos del dom
        let resultadoP = document.getElementById("resultado");
        resultadoP.style.display = "block";
        resultadoP.style.textAlign = "center";
        resultadoP.style.background = "rgb(218, 217, 214)";
        resultadoP.innerHTML = `<h2>DATOS DEL PRESTAMO QUE SOLICITASTE</h2>
                                                                    <h3>BIENVENIDO A PRESTAMOS RB : ${datosPrestamo.nombre}</h3>
                                                                    <h3>MONTO SOLICITADO : $${datosPrestamo.monto}</h3>
                                                                    <h3>MONTO A DEVOLVER : $${datosPrestamo.montoFinal.toFixed(2)}</h3>
                                                                    <h3>TOTAL A PAGAR POR MES : $${datosPrestamo.cuotaMensual.toFixed(2)}</h3>
                                                                    `;

        let boton = document.getElementById("botonCalcular");
        boton.addEventListener("click", calcularPrestamo);

        // Guardar los resultados 
        localStorage.setItem("datosPrestamo", JSON.stringify(datosPrestamo));
    }

    else {

        Swal.fire({
            icon: "error",
            title: "NECESITAS SER MAYOR DE EDAD",
            showClass: {
                popup: "animate__animated animate__zoomIn"
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut"
            }

        });

    }

}


// evento submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcularPrestamo);

// Obtener los datos del préstamo almacenados 
document.addEventListener("DOMContentLoaded", function () {

    let datosPrestamo = JSON.parse(localStorage.getItem("datosPrestamo"));
    if (datosPrestamo) {

        let resultadoP = document.getElementById("resultado");
        resultadoP.innerHTML = `<h2>DATOS DEL PRESTAMO QUE SOLICITASTE</h2>
                                                     <h3>BIENVENIDO A PRESTAMOS RB : ${datosPrestamo.nombre}</h3>
                                                     <h3>MONTO SOLICITADO : $${datosPrestamo.monto}</h3>
                                                     <h3>TOTAL A DEVOLVER : $${datosPrestamo.montoFinal.toFixed(2)}</h3>
                                                     <h3>TOTAL A PAGAR POR MES : $${datosPrestamo.cuotaMensual.toFixed(2)}</h3>`;

    }

});


