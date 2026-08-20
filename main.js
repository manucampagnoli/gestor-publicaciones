import Publicacion from "./Publicacion.js";
import Usuario from "./Usuario.js";

const usuario1 = new Usuario("Juan Pérez", "juan.perez@gmail.com");
const publicacion1 = new Publicacion("Busco apuntes algebra", "Busco apuntes de algebra analitica para mi clase", usuario1);

const usuario2 = new Usuario("María López", "maria.lopez@gmail.com");
const publicacion2 = new Publicacion("Necesito ayuda con programación", "Estoy teniendo problemas con un ejercicio de programación de poo", usuario2);

const usuario3 = new Usuario("Carlos García", "carlos.garcia@gmail.com");
const publicacion3 = new Publicacion("Busco ayuda con matemáticas", "Necesito ayuda con los ejercicios de matemáticas 1", usuario3);
publicacion3.activa = false;

const usuario4 = new Usuario("Ana Torres", "ana.torres@gmail.com");
const publicacion4 = new Publicacion("Vendo libros de texto", "Tengo libros de texto que ya no necesito sobre patrones de diseño", usuario4);

const publicaciones = [publicacion1, publicacion2, publicacion3, publicacion4];

publicaciones.forEach(publicacion => {
    console.log("--------------------");
    console.log(publicacion.mostrarResumen());
    console.log(`Activa: ${publicacion.estaActiva()}`);
    console.log(`Autor: ${publicacion.autor.nombre}`);
});

const usuario5 = new Usuario("Luis Fernández", "luis.fernandez@gmail.com");
const publicacion5 = new Publicacion("Ofrezco clases particulares", "Ofrezco clases particulares de matemáticas y física para estudiantes de secundaria", usuario5);
publicacion5.activa = false;

publicaciones.push(publicacion5);


let publicacionesActivas = publicaciones.filter(publicacion => publicacion.estaActiva());
let cantidadPublicacionesActivas = publicacionesActivas.length;
console.log("--------------------");
console.log();
console.log(`Cantidad de publicaciones activas: ${cantidadPublicacionesActivas}`);
console.log();
console.log("--------------------");
console.log("Publicaciones activas:");

publicacionesActivas.forEach((publicacion) => {
    console.log(`${publicacion.titulo}`);
});
console.log();
console.log("--------------------");

const publicacionesJSON = JSON.stringify(publicaciones, null, 2);
console.log(publicacionesJSON); // El método JSON.stringify() no incluye métodos de un objeto en la representación JSON, solamente se incluyen las propiedades del objeto. Por eso, console.log(publicacionesJSON) solo muestra los atributos de las publicaciones, como titulo, descripcion, autor, fechaPublicacion y activa.

const publicacion6 = new Publicacion("Busco comisión para proyecto de Estructuras de Datos", "Estoy buscando comision para hacer el proyecto final de estructuras de datos", usuario2);

publicaciones.push(publicacion6);

publicaciones.filter(publicacion => publicacion.esDeAutor(usuario2.nombre)).forEach(publicacion => {
    console.log("--------------------");
    console.log(`Autor: ${publicacion.autor.nombre}`);
    console.log();
});

