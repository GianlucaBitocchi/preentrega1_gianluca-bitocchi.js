
// calulador de interes
function calcularInteres(monto, cuotas) {

    if (cuotas == 3) {
        let interes = monto * 0.30;
        return interes
    }

    else if (cuotas == 6) {
        let interes = monto * 0.60;
        return interes
    }

    else if (cuotas == 12) {
        let interes = monto * 1.20;
        return interes
    }

    else if (cuotas == 18) {
        let interes = monto * 1.80;
        return interes
    }
}

let nombreApellidoUsuario = prompt("Ingresa tu Nombre y Apellido");

let edadUsuario = prompt("Ingrese su Edad");
parseInt(edadUsuario);

while (edadUsuario >= 18) {

    if (edadUsuario >= 18) {

        console.log("Bienvenido a prestamos RB: ", nombreApellidoUsuario);

        monto = prompt("Ingrese el monto que desea solicitar");
        monto = parseInt(monto);

        let cuotas = prompt("En cuantas cuotas: 3, 6 ,12 o 18");

        function mostrarSolicitudPrestamo(monto, cuotas, total) {

            console.log("Solicitaste: ", monto);
            console.log("Cantidad de cuotas: ", cuotas);
            console.log("Total con intereses: ", total);
            console.log("Pagas por cuotas: ", total / cuotas)
        }

        let total = monto + calcularInteres(monto, cuotas);

        mostrarSolicitudPrestamo(monto, cuotas, total);
        break;
    }

    else {
        console.log("Necesitas ser mayor de edad")
    }

}




