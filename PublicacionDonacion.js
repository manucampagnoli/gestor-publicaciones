import Publicacion from "./Publicacion.js";
export default class PublicacionDonacion extends Publicacion {
    
    constructor(titulo, descripcion, autor, motivo) {
        super(titulo, descripcion, autor);
        this.motivo = motivo;
    }
}