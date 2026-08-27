import Empleado from "./Empleado.js";
export default class EmpleadoFreelance extends Empleado {
    horasTrabajadas;
    valorHora;

    constructor(nombre, horasTrabajadas, valorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    calcularSueldo() {
        return this.horasTrabajadas * this.valorHora;
    }
}