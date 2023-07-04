
// Obtener los datos del formulario
function obtenerDatosFormulario() {
    return new Promise((resolve, reject) => {
        let nombre = document.getElementById("nombre").value;
        let edad = parseInt(document.getElementById("edad").value);
        let monto = parseInt(document.getElementById("monto").value);
        let cuotas = parseInt(document.getElementById("cuotas").value);

        if (nombre && !isNaN(edad) && !isNaN(monto) && !isNaN(cuotas)) {

            let datos = {
                nombre: nombre,
                edad: edad,
                monto: monto,
                cuotas: cuotas
            };

            resolve(datos);
        }
        else {
            reject("COMPLETA TODOS LOS DATOS");
        }
    });

}

    // Función error
    function mostrarError(mensaje) {
        Swal.fire({
            icon: "error",
            title: mensaje,
            showClass: {
                popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            },
        });
    }

    // calcular el prestamo
    function calcularPrestamo(e) {
        e.preventDefault();

        obtenerDatosFormulario()
            .then((datos) => {

                // corroborar edad usuario
                if (datos.edad >= 18) {

                    // calcular el préstamo
                    let prestamo = new PrestamoUsuario(datos.nombre, datos.monto, datos.cuotas);
                    prestamo.calcularIntereses();
                    let datosPrestamo = prestamo.obtenerDatos();

                    // Mostrar los datos del dom
                    let resultadoP = document.getElementById("resultado");
                    resultadoP.style.display = "block";
                    resultadoP.style.textAlign = "center";
                    resultadoP.style.background = "rgb(218, 217, 214)";
                    resultadoP.innerHTML = `<h2>DATOS DEL PRESTAMO QUE SOLICITADO</h2>
                                                                    <h3>BIENVENIDO A PRESTAMOS RB : ${datosPrestamo.nombre}</h3>
                                                                    <h3>MONTO SOLICITADO : $${datosPrestamo.monto}</h3>
                                                                    <h3>MONTO A DEVOLVER : $${datosPrestamo.montoFinal.toFixed(2)}</h3>
                                                                    <h3>TOTAL A PAGAR POR MES : $${datosPrestamo.cuotaMensual.toFixed(2)}</h3>
                                                                    <button><a href="index.html"> VOLVE A COTIZAR </a></button>
                                                                    `;

                    localStorage.setItem("datosPrestamo", JSON.stringify(datosPrestamo));
                }

                else {
                    mostrarError("NECESITAS SER MAYOR DE EDAD");
                }
            })

            .catch((error) => {
                mostrarError(error);
            });

    }

// evento calucular
let boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularPrestamo);


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

