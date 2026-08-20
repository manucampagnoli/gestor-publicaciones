Les damos la clase PublicacionServicio (adelanto de lo que viene en la Clase 3). Encuentren todos los lugares donde
una clase usa a otra sin guardarla como atributo, y marquen cuáles son dependencias.
• Listen todas las clases con las que se relaciona PublicacionServicio.
    - Usuario (supongo que por como venimos trabajando, el autor es de tipo Usuario)
    - Cupon
    - servicioNotificaciones
• Para cada una, clasifiquen el vínculo (asociación / dependencia) y justifiquen.
    - PublicacionServicio esta asociado a Usuario pues tiene un atributo que hace referencia a un objeto de tipo Usuario (autor)
    - Tanto cupon como servicioNotificaciones es un vinculo de dependencia ya que son pasadas como parametro en las funciones y utilizadas por PublicacionServicio
• ¿Cambiaría su respuesta si servicioNotificaciones se guardara en el constructor como this.notificador? ¿Por qué?
    - Si, ya que ahi se estableceria tambien un tipo de vinculo asociacion ya que se establece una relacion donde PublicacionServicio TIENE un notificador

class PublicacionServicio {
 constructor(titulo, autor, precioHora) {
 this.titulo = titulo;
 this.autor = autor;
 this.precioHora = precioHora;
 }
 calcularCosto(horasContratadas) {
 return this.precioHora * horasContratadas;
 }
 aplicarCupon(cupon) {
 const costo = this.calcularCosto(2);
 return costo - cupon.calcularDescuento(costo);
 }
 notificar(servicioNotificaciones, mensaje) {
 servicioNotificaciones.enviar(this.autor.email, mensaje);
 }
}