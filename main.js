import Publicacion from "./Publicacion.js";
import PublicacionServicio from "./PublicacionServicio.js";
import PublicacionVenta from "./PublicacionVenta.js";
import Usuario from "./Usuario.js";
import RepositorioPublicaciones from "./RepositorioPublicaciones.js";


const usuario1 = new Usuario("Juan Pérez", "juan.perez@gmail.com");
const usuario2 = new Usuario("María López", "maria.lopez@gmail.com");
const usuario3 = new Usuario("Carlos García", "carlos.garcia@gmail.com");
const usuario4 = new Usuario("Ana Torres", "ana.torres@gmail.com");

const publicaciones = [
    new Publicacion(
        "Busco apuntes de álgebra",
        "Apuntes para la clase de álgebra analítica",
        usuario1
    ),
    new PublicacionServicio(
        "Clases particulares de programación",
        "Ayuda con ejercicios de POO",
        usuario2,
        "Virtual",
        "2 horas",
        usuario3
    ),
    new PublicacionVenta(
        "Vendo libros de patrones de diseño",
        "Libros de texto en buen estado",
        usuario4,
        25000
    )
];

publicaciones[2].activa = false;
publicaciones[2].stock = 0;

const repositorioPublicaciones = new RepositorioPublicaciones();
repositorioPublicaciones.on("publicacionAgregada", (publicacion) => {
    console.log(`Nueva publicación agregada: ${publicacion.titulo}`);
});

repositorioPublicaciones.on("publicacionAgregada", (publicacion) => {
    console.log(`Publicación agregada por: ${publicacion.autor.nombre}`);
});

publicaciones.forEach(publicacion => repositorioPublicaciones.agregar(publicacion));

console.log("Todas las publicaciones:");
repositorioPublicaciones.listarResumenes().forEach(resumen => console.log(resumen));

const publicacionesActivas = repositorioPublicaciones.filtrarActivas();
console.log(`\nCantidad de publicaciones activas: ${publicacionesActivas.length}`);
publicacionesActivas.forEach(publicacion => {
    console.log(`- ${publicacion.mostrarResumen()}`);
});

const publicacionesDeUsuario = repositorioPublicaciones.buscarPorUsuario(usuario2.nombre);
console.log(`\nPublicaciones de ${usuario2.nombre}:`);
publicacionesDeUsuario.forEach(publicacion => console.log(`- ${publicacion.mostrarResumen()}`));

console.log(`\nPublicaciones de tipo venta: ${repositorioPublicaciones.filtrarPorTipo(PublicacionVenta).length}`);
console.log(`Publicaciones de tipo servicio: ${repositorioPublicaciones.filtrarPorTipo(PublicacionServicio).length}`);

console.log("\nHerencia de las publicaciones:");
publicaciones.forEach(publicacion => {
    console.log(`${publicacion.constructor.name} hereda de Publicacion: ${publicacion instanceof Publicacion}`);
});

