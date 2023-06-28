// datos del prestamo
class PrestamoUsuario {

    constructor(nombre, monto, cuotas) {

        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
        this.montoFinal = 0;

    }

    // calculador de intereses
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

    // obetencion de datos
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