export default class Usuario {
    nombre;
    email;
    fechaRegistro;

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.fechaRegistro = new Date();
    }

    mostrarPerfil() {
        return `Nombre: ${this.nombre}\nEmail: ${this.email}`;
    }

    
}