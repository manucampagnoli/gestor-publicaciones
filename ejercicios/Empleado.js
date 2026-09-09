export default class Empleado {
    nombre;
    sueldoBase;
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }
}