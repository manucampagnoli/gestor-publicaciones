export default class RepositorioPublicaciones {
    publicaciones;
    
    constructor() {
        this.publicaciones = [];
    }

    agregar(publicacion) {
        this.publicaciones.push(publicacion);
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
}