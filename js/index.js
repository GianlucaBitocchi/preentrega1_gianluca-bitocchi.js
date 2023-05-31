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
            this.monto_final = this.monto + interes;
        }
        else if (cuotas == 6) {
            interes = monto * 0.60;
            this.monto_final = this.monto + interes;
        }
        else if (cuotas == 12) {
            interes = monto * 1.20;
            this.monto_final = this.monto + interes;
        }
        else if (cuotas == 18) {
            interes = monto * 1.80;
            this.monto_final = this.monto + interes;
        }

    }

    // datos del prestamo
    get_datos() {

        console.log("Titular del prestamo: ", this.nombre);
        console.log("Monto solicitado: ", this.monto);
        console.log("Cantidad de cuotas solicitadas: ", this.cuotas);
        console.log("Total a pagar con intereses: ", this.monto_final);

    }
}

let nombreUsuario = "";
let prestamos = [ ];

for (let i = 0; i < 3; i = i + 1) {

    let nombreUsuario = prompt("INGRESE SU NOMBRE Y APELLIDO");
    let edad = prompt("INGRESE SU EDAD");
    edad = parseInt(edad);

    if (edad >= 18) {

        console.log("BIENVENIDO A PRESTAMOS RB:", nombreUsuario)

        let monto = prompt("INGRESE EL MONTO QUE DESEA SOLICITAR");
        monto = parseInt(monto);
        
        let cuotas = prompt("EN CUANTAS CUOTAS 3 , 6 , 12 o 18");
        cuotas = parseInt (cuotas);

        let prestamo = new PrestamoUsuario (nombreUsuario, monto, cuotas);
        prestamo.calcularIntereses(monto, cuotas);

        prestamos.push(prestamo);
        prestamo.get_datos ();

    }

    else if (edad <= 17) {

        console.log(nombreUsuario ,"NECESITAS SER MAYOR DE EDAD");
        break;
    }

}

