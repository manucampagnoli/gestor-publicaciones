export default class PublicacionVenta extends Publicacion {
    precio;
    stock = 1;

    constructor(titulo, descripcion, autor, precio) {
        super(titulo, descripcion, autor);
        this.precio = precio;
    }

    mostrarResumen() {
        return `${super.mostrarResumen()}, Precio: $${this.precio}, Stock: ${this.stock}`;
    }

}