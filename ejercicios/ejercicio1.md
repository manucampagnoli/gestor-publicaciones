// Caso A
class Factura {
 constructor(numero, cliente) {
 this.numero = numero;
 this.cliente = cliente; // objeto Cliente
 }
}
// Caso B
class Factura {
 aplicarImpuesto(calculadora) {
 return calculadora.calcular(this.total);
 }
}
// Caso C
class Biblioteca {
 constructor() {
 this.libros = []; // array de objetos Libro
 }


 En el caso A, se produce una asociacion ya que tiene un atributo de tipo Cliente entonces se establece una relacion tiene-un. 
 En el caso B, se produce una dependencia ya que el parametro del metodo aplicarImpuesto es de tipo calculadora, se establece una relacion de usa-un. Depende de la clase calculadora para poder funcionar correctamente.
 En el caso C, se produce una asociacion ya que tiene un atributo que es una coleccion de objetos de tipo Libro, por lo tanto la relacion es de uno a muchos (una biblioteca tiene muchos libros) 