class PrestamoUsuario {

    constructor(nombre, monto, cuotas) {

        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
        this.monto_final = 0;
    }

    // calculador de intereses
    calcularIntereses(monto, cuotas) {

        let interes;

        if (cuotas == 3) {
            interes = monto * 0.30;
            this.montoFinal = this.monto + interes;
        }
        else if (cuotas == 6) {
            interes = monto * 0.60;
            this.montoFinal = this.monto + interes;
        }
        else if (cuotas == 12) {
            interes = monto * 1.20;
            this.montoFinal = this.monto + interes;
        }
        else if (cuotas == 18) {
            interes = monto * 1.80;
            this.montoFinal = this.monto + interes;
        }

    }

    // datos del prestamo
    get_datos() {

        console.log("Monto solicitado: ", this.monto);
        console.log("Cantidad de cuotas solicitadas: ", this.cuotas);
        console.log("Total a pagar con intereses: ", this.montoFinal);
        console.log("Total a pagar por cuota: ", this.montoFinal / this.cuotas)

    }
}

let prestamos = [];

function calcular() {

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (calcular){

        calcular.preventDefault();

        let nombreUsuario = document.getElementById("nombreUsuario");
        let edadUsuario = document.getElementById("edadUsuario");
        edadUsuario = parseInt(edadUsuario);
        let msj = document.getElementById("mensaje");

        if (edadUsuario.value >= 18) {

            let parrafo = document.createElement("p");

            parrafo.innerText = "BIENVENIDO A PRESTAMOS RB: " + nombreUsuario.value;
            parrafo.style.textAlign = "center";

            msj.append(parrafo);
            console.log("nombre", nombreUsuario);

            let monto = document.getElementById("montoUno");
            monto = parseInt(monto);

            let parrafoDos = document.createElement("p");

            parrafoDos.innerText = "MONTO SOLICITADO: " + monto.value;
            parrafoDos.style.textAlign = "center";

            msj.append(parrafoDos);
            console.log("monto", montoUno);

            let cuotas = document.getElementById("cuotasUno");
            cuotas = parseInt(cuotas);

            let parrafoTres = document.createElement("p");

            parrafoTres.innerText = "CANTIDAD DE CUOTAS SOLICITADAS: " + cuotas.value;
            parrafoTres.style.textAlign = "center";

            msj.append(parrafoTres);
            console.log("cuotas", cuotasUno);

            let parrafoCuatro = document.createElement("p");

            parrafoCuatro.innerText = "TOTAL A DEVOLVER: " + montoFinal;
            parrafoCuatro.style.textAlign = "center";

            msj.append(parrafoCuatro);
            console.log("monto final", montoFinal);

            let parrafoCinco = document.createElement("p");

            parrafoCinco.innerText = "TOTAL A PAGAR POR CUOTA: " + montoFinal / cuotas;
            parrafoCinco.style.textAlign = "center";

            msj.append(parrafoCinco);
            console.log("monto total", montoFinal / cuotasUno);

            let prestamo = new PrestamoUsuario(nombreUsuario, monto, cuotas);
            prestamo.calcularIntereses(monto, cuotas);

            prestamos.push(prestamo);
            prestamo.get_datos();

        }

        else if (edadUsuario <= 17) {

            document.body.innerHTML = `<h3>NECESITAS SER MAYOR DE EDAD </h3>
                                                    <a href="index.html"> VOLVE A CALCULAR TU PRESTAMO </a>`;

        }

    })

}

let botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener("click", calcular);






