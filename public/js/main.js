
const formulario = document.querySelector("#form-publicacion");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const autor = document.querySelector("#autor");
const email = document.querySelector("#email");
const ayudaEmail = document.querySelector("#ayuda-email");
const tipo = document.querySelector("#tipo");
const camposEspecificos = document.querySelector("#campos-especificos");
const vistaPrevia = document.querySelector("#vista-previa");


 

 
titulo.addEventListener("input", observarEvento);
tipo.addEventListener("change", observarEvento);
function observarEvento(evento) {
  console.table({
    type: evento.type,
    target: evento.target.id,
    currentTarget: evento.currentTarget.id,
    timeStamp: Math.round(evento.timeStamp),
  });
}

function actualizarVistaPrevia() {
  const nombre = autor.value || "Autor";
  const texto = titulo.value || "Sin título";
  vistaPrevia.textContent = `${texto} — ${nombre} (${tipo.value})`;
}
titulo.addEventListener("input", actualizarVistaPrevia);
autor.addEventListener("input", actualizarVistaPrevia);
tipo.addEventListener("change", actualizarVistaPrevia);


function actualizarCamposEspecificos() {
    if (tipo.value === "venta") {
        camposEspecificos.innerHTML = `
            <input id="precio" type="number" placeholder="Precio">
            <input id="stock" type="number" value="1">
        `;
    } else {
        camposEspecificos.innerHTML = `
            <select id="modalidad">
                <option>presencial</option>
                <option>virtual</option>
            </select>
            <input id="duracion" type="number" placeholder="Minutos">
        `;
    }
}

tipo.addEventListener("change", actualizarCamposEspecificos);
actualizarCamposEspecificos();


function mostrarAyudaEmail() {
    ayudaEmail.textContent = "Usá un email válido del autor";
}

function ocultarAyudaEmail() {
    ayudaEmail.textContent = "";
}

email.addEventListener("focus", mostrarAyudaEmail);
email.addEventListener("blur", ocultarAyudaEmail);
