export function publicarConDemora(publicacion, callback) {
  setTimeout(() => {
    callback(publicacion);
  }, 1000);
}

function esperarDemora(publicacion, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(publicacion);
    }, ms);
  });
}

export async function publicarConDemoraAsync(publicacion) {
  const publicacionLista = await esperarDemora(publicacion);
  return publicacionLista;
}
