import Empleado from "./Empleado.js";
export default class EmpleadoTiempoCompleto extends Empleado {
    bonoFijo = 50000;

    constructor(nombre, sueldoBase) {
        super(nombre, sueldoBase);
    }

    calcularSueldo() {
        return super.calcularSueldo() + this.bonoFijo;
    }

}