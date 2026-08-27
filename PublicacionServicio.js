export default class PublicacionServicio extends Publicacion {
    modalidad;
    duracion;
    cliente;

    constructor(titulo, descripcion, autor, modalidad, duracion, cliente) {
            super(titulo, descripcion, autor);
            this.modalidad = modalidad;
            this.duracion = duracion;
            this.cliente = cliente;
    }

    mostrarResumen() {
        return `${super.mostrarResumen()}, Modalidad: ${this.modalidad}, Duración: ${this.duracion}`;
    }

}