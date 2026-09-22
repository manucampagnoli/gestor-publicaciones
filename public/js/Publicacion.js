export class Publicacion {
    static contador = 0;

    id;
    titulo;
    descripcion;
    autor;
    fechaPublicacion;
    activa;
    destacadol;

    constructor (titulo, descripcion, autor) {
        this.id = ++Publicacion.contador;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.autor = autor;
        this.fechaPublicacion = new Date();
        this.activa = true;
        this.destacado = false;
    }

    mostrarResumen() {
        return `${this.titulo} - ${this.autor.nombre}`;
    }

    estaActiva() {
        return this.activa;
    }

    esDeAutor(nombre) {
        return this.autor.nombre === nombre;
    }

    diasPublicada() {
        const ms = new Date() - this.fechaPublicacion;
        return Math.floor(ms / (1000 * 60 * 60 * 24));
    }

    darDeBaja() {
        this.activa = false;
    }

    destacar() {
        this.destacado = true;
    }

    opacar() {
        this.destacado = false;
    }
}