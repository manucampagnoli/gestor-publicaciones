export default class PublicacionServicio extends Publicacion {
    modalidad;
    duracion;

    constructor(titulo, descripcion, autor, modalidad, duracion) {
            super(titulo, descripcion, autor);
            this.modalidad = modalidad;
            this.duracion = duracion;
    }

    mostrarResumen() {
        return `${super.mostrarResumen()}, Modalidad: ${this.modalidad}, Duración: ${this.duracion}`;
    }

}