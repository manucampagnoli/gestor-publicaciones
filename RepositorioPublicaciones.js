import { EventEmitter } from "node:events";

export default class RepositorioPublicaciones extends EventEmitter{
    publicaciones;
    
    constructor() {
        super();
        this.publicaciones = [];
    }

    agregar(publicacion, reglas) {
        if (!validarPublicacion(publicacion, reglas)) {
            throw new Error('La publicación no cumple las reglas de validación');
        }
        this.publicaciones.push(publicacion);
        this.emit("publicacionAgregada", publicacion);
    }

    buscarPorUsuario(nombre) {
        return this.publicaciones.filter(publicacion => publicacion.esDeAutor(nombre));
    }

    filtrarActivas() {
        return this.publicaciones.filter(publicacion => publicacion.estaActiva());
    }

    cantidadTotal() {
        return this.publicaciones.length;
    }

    listaPorTipo(claseConstructor) {
        return this.publicaciones.filter(publicacion => publicacion instanceof claseConstructor);
    }

    listarResumenes() {
        return this.publicaciones.map(publicacion => publicacion.mostrarResumen());
    }

    filtrarPorTipo(claseConstructor) {
        return this.publicaciones.filter(publicacion => publicacion instanceof claseConstructor);
    }
    
}

function validarPublicacion(publicacion, reglas) {
    for (const propiedad in reglas) {
        const validador = reglas[propiedad];

        if (typeof validador === 'function') {
            if (!validador(publicacion[propiedad], publicacion)) {
                return false;
            }
        } else {
            if (publicacion[propiedad] !== validador) {
                return false;
            }
        }
    }
    return true;
}
