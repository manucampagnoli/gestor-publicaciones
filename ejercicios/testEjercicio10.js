import Empleado from "./Empleado.js"; 
import EmpleadoTiempoCompleto from "./EmpleadoTiempoCompleto.js";
import EmpleadoFreelance from "./EmpleadoFreelance.js";

const empleados = [
    new EmpleadoTiempoCompleto("Juan", 100000),
    new EmpleadoFreelance("María", 20, 5000),
    new EmpleadoTiempoCompleto("Pedro", 120000),
    new EmpleadoFreelance("Ana", 15, 6000)
];

empleados.forEach(empleado => {
    console.log(`Empleado: ${empleado.nombre}, Sueldo: $${empleado.calcularSueldo()}`);
});