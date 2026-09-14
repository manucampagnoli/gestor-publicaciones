export function validarPublicacion(publicacion, reglas) {
  if (publicacion.titulo.length < reglas.minTitulo) {
    return false;
  }
  if (reglas.descripcionObligatoria && !publicacion.descripcion) {
    return false;
  }
  return true;
}
