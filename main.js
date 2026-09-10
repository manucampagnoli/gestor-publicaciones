import { Publicacion } from "./Publicacion.js";
import { Usuario } from "./Usuario.js";
import { PublicacionVenta } from "./PublicacionVenta.js";
import { PublicacionServicio } from "./PublicacionServicio.js";
import { RepositorioPublicaciones } from "./RepositorioPublicaciones.js";
import { validarPublicacion } from "./validaciones.js";
import { publicarConDemora, publicarConDemoraAsync } from "./asincronia.js";

console.log("\n=== Usuarios y Publicaciones ===\n");


const ana = new Usuario("Ana", "ana@mail.com");
const beto = new Usuario("Beto", "beto@mail.com");
const caro = new Usuario("Caro", "caro@mail.com");


ana.agregarContacto(beto);
console.log("Contactos de Ana:", ana.contactos.map((c) => c.nombre));


const p1 = new PublicacionVenta("Apuntes de Física II", "Completos, con resueltos", ana, 3500);
const p2 = new PublicacionVenta("Calculadora científica", "Usada, funciona perfecto", beto, 8000);
const p3 = new PublicacionServicio("Clases de inglés", "Nivel intermedio", caro, "virtual", 1, ana);
const p4 = new PublicacionServicio("Ayuda con Álgebra", "Repaso para el final", ana, "presencial", 2, beto);
const p5 = new PublicacionVenta("Apunte viejo de Química", "Ediciones anteriores", beto, 500);
p5.activa = false;

const publicaciones = [p1, p2, p3, p4, p5];


publicaciones.forEach((p) => {
  console.log(`${p.mostrarResumen()} | activa: ${p.estaActiva()}`);
});


const activas = publicaciones.filter((p) => p.estaActiva());
console.log("\nTítulos activos:", activas.map((p) => p.titulo));
console.log("Cantidad de activas (for clásico):", (() => {
  let contador = 0;
  for (const p of publicaciones) if (p.estaActiva()) contador++;
  return contador;
})());


const primeraDeAna = publicaciones.find((p) => p.autor.nombre === "Ana");
console.log("\nPrimera publicación de Ana:", primeraDeAna.mostrarResumen());


ana.email = "ana.nueva@mail.com";
console.log("\n¿Cambió el email en todas las publicaciones de Ana?");
publicaciones
  .filter((p) => p.autor === ana)
  .forEach((p) => console.log(" ", p.autor.email));

console.log(
  "\nPublicaciones de Beto (esDeAutor):",
  publicaciones.filter((p) => p.esDeAutor("Beto")).map((p) => p.titulo)
);

console.log("\n=== Herencia y polimorfismo ===\n");

publicaciones.forEach((p) =>
  console.log(`${p.titulo} → instanceof Publicacion: ${p instanceof Publicacion}`)
);


const reglas = { minTitulo: 5, descripcionObligatoria: true };

const repositorio = new RepositorioPublicaciones();


repositorio.on("publicacionAgregada", (pub) => {
  console.log(`[listener 1 - log] Nueva publicación: "${pub.titulo}"`);
});
repositorio.on("publicacionAgregada", (pub) => {
  console.log(`[listener 2 - notificación] Avisando a ${pub.autor.nombre} que su publicación está online`);
});


publicaciones.forEach((p) => {
  if (validarPublicacion(p, reglas)) {
    repositorio.agregar(p);
  } else {
    console.log(`"${p.titulo}" no pasó la validación y no se agregó.`);
  }
});

console.log("\nBúsqueda por usuario (Ana):", repositorio.buscarPorUsuario("Ana").map((p) => p.titulo));
console.log("Activas en el repositorio:", repositorio.filtrarActivas().map((p) => p.titulo));
console.log("Cantidad total en repositorio:", repositorio.cantidadTotal());


console.log("\nlistarResumenes():");
repositorio.listarResumenes().forEach((r) => console.log(" -", r));

console.log(
  "\nfiltrarPorTipo(PublicacionVenta):",
  repositorio.filtrarPorTipo(PublicacionVenta).map((p) => p.titulo)
);
console.log(
  "filtrarPorTipo(PublicacionServicio):",
  repositorio.filtrarPorTipo(PublicacionServicio).map((p) => p.titulo)
);

console.log("\n=== Asincronía: callback vs async/await ===\n");

console.log("Antes de publicarConDemora...");
publicarConDemora(p1, (pub) => {
  console.log(`[callback] "${pub.titulo}" publicada con demora.`);
});
console.log("...esto se imprime ANTES del callback: setTimeout no bloquea.\n");

async function demoAsync() {
  console.log("Antes de publicarConDemoraAsync (await)...");
  const pub = await publicarConDemoraAsync(p2);
  console.log(`[async/await] "${pub.titulo}" publicada con demora.`);
}
demoAsync();

console.log("\n=== Serializar a JSON ===\n");
const publicacionesJSON = JSON.stringify(publicaciones, null, 2);
console.log(publicacionesJSON);

