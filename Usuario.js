export default class Usuario {
    nombre;
    email;
    fechaRegistro;
    contactos = [];

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.fechaRegistro = new Date();
    }

    mostrarPerfil() {
        return `Nombre: ${this.nombre}\nEmail: ${this.email}`;
    }

    agregarContacto(usuario) {
        if (!this.contactos.includes(usuario)) {
            this.contactos.push(usuario);
        }
    }
    
}