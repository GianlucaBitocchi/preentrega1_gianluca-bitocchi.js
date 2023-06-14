// Clase para el cálculo del préstamo
class PrestamoUsuario {
    
    constructor(nombre, monto, cuotas) {

        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
        this.montoFinal = 0;

    }

    // Método para calcular los intereses y monto final
    calcularIntereses() {

        let interes;

        if (this.cuotas === 3) {
            interes = this.monto * 0.30;
        }
        else if (this.cuotas === 6) {
            interes = this.monto * 0.60;
        }
        else if (this.cuotas === 12) {
            interes = this.monto * 1.20;
        }
        else if (this.cuotas === 18) {
            interes = this.monto * 1.80;
        }

        this.montoFinal = this.monto + interes;
    }

    // Método para obtener los datos del préstamo
    obtenerDatos() {

        return {

            nombre: this.nombre,
            monto: this.monto,
            cuotas: this.cuotas,
            montoFinal: this.montoFinal,
            cuotaMensual: this.montoFinal / this.cuotas,

        };

    }

}

// Función para calcular el préstamo
function calcularPrestamo(e) {


    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let monto = parseInt(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);

    // Verificar la edad del usuario
    if (edad >= 18) {

        // Calcular el préstamo
        let prestamo = new PrestamoUsuario(nombre, monto, cuotas);
        prestamo.calcularIntereses();
        let datosPrestamo = prestamo.obtenerDatos();

        // Mostrar los resultados en el DOM
        let elemento = document.getElementById("resultado");
        elemento.style.display = "block";
        elemento.resultadoinnerHTML = `<h2>Resultados del Préstamo</h2>
                                                                    <p>BIENVENIDO A PRESTAMOS RB: ${datosPrestamo.nombre}</p>
                                                                    <p>MONTO A DEVOLVER: $${datosPrestamo.montoFinal.toFixed(2)}</p>
                                                                    <p>TOTAL A PAGAR POR MES: $${datosPrestamo.cuotaMensual.toFixed(2)}</p>
    `;

    let boton = document.getElementById("botonCalcular");
    boton.addEventListener("click", calcularPrestamo);

        // Guardar los resultados en el almacenamiento local
        localStorage.setItem("datosPrestamo", JSON.stringify(datosPrestamo));
    } 
    
    else {
        // Mostrar mensaje de error si el usuario es menor de 18 años
        let resultado= document.getElementById("resultado");
        resultado.innerHTML = `<p>NECESITAS SER MAYOR DE EDAD</p>`;
    }
}
  
// Escuchar el evento submit del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcularPrestamo);

// Obtener los datos del préstamo almacenados en el almacenamiento local y mostrarlos al cargar la página
document.addEventListener("DOMContentLoaded", function () {

    let datosPrestamo = JSON.parse(localStorage.getItem("datosPrestamo"));
    if (datosPrestamo) {

        let resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
      <h3>DATOS DEL PRESTAMO QUE SOLICITASTE</h3>
      <p>BIENVENIDO A PRESTAMOS RB: ${datosPrestamo.nombre}</p>
      <p>TOTAL A DEVOLVER: $${datosPrestamo.montoFinal.toFixed(2)}</p>
      <p>TOTAL A PAGAR POR MES: $${datosPrestamo.cuotaMensual.toFixed(2)}</p>
    `;

    }

});


